// Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', function() {

    // Get all elements needed
    const modalCarRental = document.getElementById('modal-car-rental');
    const modalPizzaOrder = document.getElementById('modal-pizza-order');
    const modalPineZoo = document.getElementById('modal-pine-zoo');
    const closeModalButtons = document.querySelectorAll('.close-modal');

    // Function to open a specific modal
    function openModal(modalElement) {
        modalElement.classList.add('show');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    // Function to close any open modal
    function closeModal() {
        const openModals = document.querySelectorAll('.modal.show');
        openModals.forEach(modal => {
            modal.classList.remove('show');
        });
        document.body.style.overflow = ''; // Re-enable scrolling
    }

    // Set up event listeners for the "Case Study" buttons on your project cards
    // You need to add the correct IDs to your buttons for this to work.
    
    // Example: If your Car Rental project card's button has id="btn-car-rental"
    const btnCarRental = document.getElementById('btn-car-rental');
    const btnPizzaOrder = document.getElementById('btn-pizza-order');
    const btnPineZoo = document.getElementById('btn-pine-zoo');

    if(btnCarRental) {
        btnCarRental.addEventListener('click', () => openModal(modalCarRental));
    }
    
    if(btnPizzaOrder) {
        btnPizzaOrder.addEventListener('click', () => openModal(modalPizzaOrder));
    }
    if(btnPineZoo) {
        btnPineZoo.addEventListener('click', () => openModal(modalPineZoo));
    }

    // Close modal when clicking on the 'x' button
    closeModalButtons.forEach(button => {
        button.addEventListener('click', closeModal);
    });

    // Close modal when clicking anywhere outside of the modal content
    window.addEventListener('click', function(event) {
        if (event.target.classList.contains('modal')) {
            closeModal();
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeModal();
        }
    });
});