const { loadFixture } = require('@nomicfoundation/hardhat-network-helpers');
const { expect } = require('chai');
const { ethers } = require('hardhat');

describe('Calculator Contract', function() {
	async function reuse() {
		const calculator = await ethers.getContractFactory('Calculator');
		const calculatorContract = await calculator.deploy();
		return { calculatorContract };
	}

	describe('Test Addition', function() {
		it('should add two numbers', async function() {
			const { calculatorContract } = await loadFixture(reuse);
			expect(await calculatorContract.add(2, 3)).to.equal(5);
		});
	});

	describe('Test Subtraction', function() {
		it('should subtact one number from another', async function() {
			const { calculatorContract } = await loadFixture(reuse);
			expect(await calculatorContract.subtract(5, 1)).to.equal(4);
		});
	});

	describe('Test Multiplication', function() {
		it('should multiply two numbers', async function() {
			const { calculatorContract } = await loadFixture(reuse);
			expect(await calculatorContract.multiply(4, 4)).to.equal(16);
		});
	});

	describe('Test Division', function() {
		it('shoould divide one number by another', async function() {
			const { calculatorContract } = await loadFixture(reuse);
			expect(await calculatorContract.division(4, 2)).to.equal(2);
		});
	});
});
