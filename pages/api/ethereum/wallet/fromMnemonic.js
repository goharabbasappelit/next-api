
import { ethers } from "ethers";

export default function fromMnemonic(req, res){
    const {mnemonic} = req.query;
    const wallet = ethers.Wallet.fromMnemonic(mnemonic, `m/44'/60'/0'/0/0`);

    const response = {
        privateKey: wallet.privateKey,
        address: wallet.address,
        mnemonic: wallet._mnemonic().phrase
    };

    res.json({ data: response });
}