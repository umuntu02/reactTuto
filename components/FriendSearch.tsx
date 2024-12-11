'use client'

import { useState } from "react"
import React from 'react'
import ButtonBlue from "./ButtonBlue"

const FriendSearch = () => {
    const [email, setEmail] = useState("");
  return (
    <div className="flex items-center space-x-2 mb-6">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter an email"
                            className="flex-1 px-4 py-2 border rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <ButtonBlue
                            type="searchFriend"
                            title="Inviter"
                        />
                    </div>
  )
}

export default FriendSearch
