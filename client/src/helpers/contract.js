const TOKEN_CONTRACT_ADDRESS = process.env.REACT_APP_TOKEN_CONTRACT_ADDRESS

export const getContract = async (library) => {
  const contractJson = await fetch('/contracts/FirstContract.json')
  const contract = await contractJson.json()
  return new library.eth.Contract(contract?.abi ?? {}, TOKEN_CONTRACT_ADDRESS)
}
