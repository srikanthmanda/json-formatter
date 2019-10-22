const server='http://localhost:8080';

describe('JSON Formatter', function() {
	it('formats Array with numbers, Booleans and null', function() {
		cy.visit(server);
		cy.get('#json_text')
		.type('[1, true, false, null, 0]')
		.should('have.value', '[1, true, false, null, 0]');
		cy.get('#format_json').click();
		cy.get('#formatted_json_text')
		.should('have.value', '[\n'
			+ '	1,\n'
			+ '	true,\n'
			+ '	false,\n'
			+ '	null,\n'
			+ '	0\n'
		+ ']');
	});
});