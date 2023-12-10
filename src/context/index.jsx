import React, { useContext, createContext } from 'react';
import { useAddress, useContract, useMetamask, useContractWrite,Web3Button } from '@thirdweb-dev/react';
import { ethers } from 'ethers';
import { EditionMetadataWithOwnerOutputSchema } from '@thirdweb-dev/sdk';

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
    const { contract } = useContract("0x363E060e84f5dCa31B6B110BFD7b6A8a0A354790");

    const address = useAddress();
    const connect = useMetamask();
    

        const publishProject = async (form) => {
        try {
          console.log("publish Project INside@@@@@:",form)
            const data = await contract.call("createProject",[
              address, // owner
              form.title, // title
              form.description, // description
              form.target,
              new Date(form.deadline).getTime(), // deadline,
              form.image
            ])
            console.log("contract call success", data)
          } catch (error) {
            console.log("contract call failure", error)
          }
    }

    return (
        <StateContext.Provider
          value={{ 
            address,
            contract,
            connect,
            createProject: publishProject,
            //getProject,
            //getUserProject,
            //donate,
            //getDonations
          }}
        >
          {children}
        </StateContext.Provider>
      )
}

export const useStateContext = () => useContext(StateContext);
