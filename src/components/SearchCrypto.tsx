/*
@Author: Papoi
@Created at: 2024-4-14
@Description: search cryptos modal component
*/

import * as React from 'react';
import { useState, useEffect } from 'react';
import { Modal, Input } from 'antd';

import CryptoItem from './CryptoItem';
import PinCryptoItem from './PinCryptoItem';

import data from '../data/cryptos.json';
import pindata from '../data/top_crypto.json';
import popdata from '../data/pop_crypto.json';

interface SearchCryptoProps {
    open: boolean,
    onClose: () => void,
    setToken: (token: string, icon: string, price: number) => void,
}

const SearchCrypto: React.FC<SearchCryptoProps> = ({
    open,
    onClose,
    setToken
}) => {
    const [searchValue, setSearchValue] = useState('');
    const [filteredData, setFilteredData] = useState(data);

    useEffect(() => {
        // Filter the data based on the search value
        const filteredTokens = data.filter(item =>
            item.name.toLowerCase().includes(searchValue.toLowerCase())
        );

        setFilteredData(filteredTokens);
    }, [searchValue]);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    };

    return (
        <div>
            <Modal
                title="Select a token"
                centered
                style={{ height: "600px", maxHeight: "600px", overflowY: 'auto' }}
                open={open}
                onOk={onClose}
                onCancel={onClose}
                footer={null}
            >
                <Input
                    placeholder="Search token"
                    value={searchValue}
                    onChange={handleSearchChange}
                />

                <div className="p-2">
                    {pindata.map(item => (
                        <PinCryptoItem
                            key={item.token}
                            name={item.name}
                            token={item.token}
                            icon={item.icon}
                            price={item.price}
                            setToken={() => setToken(item.token, item.icon, item.price)}
                        />
                    ))}
                </div>

                <hr className="mb-2" />
                {
                    searchValue === '' ? (
                        popdata.map(item => (
                            <CryptoItem
                                key={item.token}
                                name={item.name}
                                token={item.token}
                                icon={item.icon}
                                price={item.price}
                                setToken={() => setToken(item.token, item.icon, item.price)}
                            />
                        ))) : (filteredData.map(item => (
                            <CryptoItem
                                key={item.token}
                                name={item.name}
                                token={item.token}
                                icon={item.icon}
                                price={item.price}
                                setToken={() => setToken(item.token, item.icon, item.price)}
                            />
                        )))
                }
            </Modal>
        </div>
    );
}

export default SearchCrypto;