/*
@Author: Papoi
@Created at: 2024-4-14
@Description: pinned crypto item component
*/

interface PinCryptoItemPinCryptoItemProps {
    name: string,
    token: string,
    icon: string,
    price: number,
    setToken: (token: string, icon: string, price: number) => void,
}

const PinCryptoItem: React.FC<PinCryptoItemPinCryptoItemProps> = ({
    name,
    token,
    icon,
    price,
    setToken,
}) => {
    return (
        <div
            className="inline-flex border rounded-full px-2 py-1 mr-2 my-1 hover:cursor-pointer hover:bg-gray-100" 
            onClick={() => setToken(token, icon, price)}
        >
            <div className="flex  items-center ">
                <img src={icon} width={25} alt={token}/>
                <span className="text-[17px] mb-1 ml-1">{token}</span>
            </div>
        </div>
    );
}

export default PinCryptoItem;