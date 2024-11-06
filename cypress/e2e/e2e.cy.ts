describe('Send Message Test', () => {
    it('should input text and click send button', () => {
      cy.visit('/');
  
      cy.get('textarea[nz-input]').type('你好');
  
      cy.get('button[nzType="primary"]').click();
  
      cy.get('.response-container p').should('contain', '你好');
    });
  });
  