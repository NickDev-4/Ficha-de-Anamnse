document.addEventListener('DOMContentLoaded', () => {
    
    // Set today's date automatically in the signature
    const dateInput = document.getElementById('data_assinatura');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.value = today;
    }

    // Export to PDF functionality
    const btnExport = document.getElementById('btn-export');
    const loadingOverlay = document.getElementById('loading-overlay');
    const formElement = document.getElementById('pdf-content');

    btnExport.addEventListener('click', () => {
        // Change the document title temporarily so the saved PDF filename is dynamic
        const originalTitle = document.title;
        const patientName = document.getElementById('nome').value.trim() || 'Paciente';
        document.title = `Anamnese_${patientName.replace(/\s+/g, '_')}`;

        // Trigger the native browser print dialog, which offers "Save as PDF"
        window.print();

        // Restore original document title after a short delay
        setTimeout(() => {
            document.title = originalTitle;
        }, 1000);
    });

    // Add subtle hover effects to inputs
    const allInputs = document.querySelectorAll('input, select, textarea');
    allInputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.parentElement.style.transform = 'translateY(-2px)';
            input.parentElement.style.transition = 'transform 0.3s ease';
        });
        input.addEventListener('blur', () => {
            input.parentElement.style.transform = 'translateY(0)';
        });
    });
});
