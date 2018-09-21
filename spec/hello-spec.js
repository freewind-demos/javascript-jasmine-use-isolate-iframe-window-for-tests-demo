describe('JQuery', function () {
    it('can be tested in jasmine', function () {
        const result = hello('<div>JQuery</div>')
        expect(result).toBe('JQuery')
    })
})
