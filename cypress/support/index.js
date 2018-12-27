beforeEach(() => {
    cy.log('Unregister serviceWorker');

    if (window.navigator && navigator.serviceWorker) {
        navigator.serviceWorker.getRegistrations().then(registrations => {
            registrations.forEach(registration => {
                registration.unregister();
            });
        });
    }
});
