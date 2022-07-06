
import { ethers } from "ethers";

export default function newWallet(req, res){
    const wallet = ethers.Wallet.createRandom();

    const response = {
        mnemonic: wallet._mnemonic().phrase
    };


    res.json({ data: response });
}