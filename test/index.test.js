const sum = require('../')
// const assert = require('assert')

// describe('Sum', () => {
// 	it('should handle positive numbers', () => {
// 		assert.equal(sum(3, 5), 8)
// 	})
// 	it('should handle negative numbers', () => {
// 		assert.equal(sum(3,-5), -2)
// 	})
// 	it('should handle decimals', () => {
// 		assert.equal(sum(3.5, 7.1), 10.6)
// 	})
// })

// Using Jest
describe('Sum', () => {
	test('Should handle positive numbers', () => {
		expect(sum(3,5)).toEqual(8)
	})
	test('Should handle negative numbers', () => {
		expect(sum(3,-5)).toEqual(-2)
	})
	test('Should handle decimals', () => {
		expect(sum(3.5,2.2)).toEqual(5.7)
	})
})