import { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";
import { shortenAddress } from "../utils/shortenAddress";
import dummydata from "../utils/dummydata";
import useFetch from "../useFetch";


const TransactionCard = ({ addressTo, addressFrom, timestamp, message, keyword, amount, url }) => {
    const gifUrl = useFetch({ keyword })

    return (
        <div className="bg-[#181918] rounded-md hover:shadow-2xl flex-col p-3 m-4 flex flex-1 2xl:min-w-[450px] 2xl:max-w-[500px] sm:min-w-[270px] sm:max-w-[300px] ">
            <div className="flex flex-col items-center w-full mt-3 ">
                <div className="display-flex justify-start w-full mb-6 p-2">
                    <a href={`https://goerli.etherscan.io/address/${addressFrom}`} target="_blank" rel="noreferrer">
                        <p className="text-white text-base "> From: {shortenAddress(addressFrom)}

                        </p>
                    </a>
                    <p className="text-white text-base">Amount: {amount} ETH</p>

                    <a href={`https://goerli.etherscan.io/address/${addressTo}`} target="_blank" rel="noreferrer">
                        <p className="text-white text-base "> To: {shortenAddress(addressTo)}

                        </p>
                    </a>

                    {message && (
                        <>
                            <br />
                            <p className="text-white text-base">Message: {message}</p>
                        </>
                    )}
                    
                </div>
                <img className="w-full h-64 2x-96 rounded-md shadow-lg object-cover " src={gifUrl || url} alt="gif" >

                    </img>

                    <div className="bg-black p-3 px-5 w-max rounded-3xl -mt-5 shadow-2xl">
                        <p className="text-[#37c7da] font-bold">{timestamp}</p>
                    </div>
            </div>
        </div>
    )
}
const transactions = () => {

    const { currentAccount,transactions } = useContext(TransactionContext);


    return (
        <div className="flex w-full 2xl:px-20 gradient-bg-transactions justify-center items-center ">
            <div className="flex-flex-col md:p-12 py-12 px-4">
                {currentAccount ? (<h3 className="text-white text-3xl my-2 text-center  ">Latest Transactions</h3>) : (<h3 className="text-white text-3xl my-2 text-center  ">Connect your account to see latest transactions</h3>)
                }

                <div className="flex flex-wrap justify-center items-center mt-10 ">
                    {
                        [...dummydata, ...transactions].reverse().map((transactions, i) => (
                            <TransactionCard key={i} {...transactions} />
                        ))
                    }
                </div>


            </div>
        </div>
    );
}

export default transactions;