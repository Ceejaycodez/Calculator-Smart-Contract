const hre = require('hardhat');

async function main() {
	const Calculator = await hre.ethers.getContractFactory('Calculator');
	const calculatorContract = await Calculator.deploy();

	await calculatorContract.deployed();

	console.log(`The calculator was depolyed to ${calculatorContract.address} address.`);
}

main().catch((error) => {
	console.error(error);
	process.exitCode = 1;
});
