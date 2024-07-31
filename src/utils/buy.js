import { ethers } from 'ethers';

const buy = async(marketplace, tokenId, price) => {
    let transaction;
        try{
            const priceInWei = ethers.parseEther(price);
            console.log(price);
            console.log(tokenId);
         transaction = await marketplace.purchaseToken(tokenId, {value: priceInWei, gas:4000000});
         console.log(transaction);
          if(transaction)alert('transaction successfull!');
          return transaction;
        }
        catch(error){
            console.error(error);
     
        }
}
 

export default buy