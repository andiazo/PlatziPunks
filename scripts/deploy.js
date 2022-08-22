const deploy = async () => {
    const [deployer] = await ethers.getSigners();
    const PlatziPunks = await ethers.getContractFactory("PlatziPunks");

    console.log("Deploying contract with the account:", deployer.address);

    const maxSupply = 10000
    const deployed = await PlatziPunks.deploy(maxSupply);

    console.log("Contract is deployed at:", deployed.address)
};

deploy()
	.then(() => process.exit(0))
	.catch((error) => {
		console.log('> Error:', error);
		process.exit(1);
	});
