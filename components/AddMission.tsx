import React from 'react'
import { Plus } from "lucide-react";
import ButtonBlue from "./ButtonBlue";

const AddMission = ({  title, subtext }: AddMissionProps) => {
    return (
        <section className="addMission">
            <div className="addMission-content">
                <div className="flex justify-center items-center mb-4">
                    <div className="w-12 h-12 flex items-center justify-center border-2 border-gray-300 rounded-md">
                        <Plus className="w-6 h-6 text-gray-600" />
                    </div>
                </div>
                <h2 className="header-2 m-3">{title}</h2>
                <p className="text-sm text-gray-500 mb-6">{subtext}</p>
                <ButtonBlue
                    type="newMission"
                    title="+ Nouvelle Mission"
                />
            </div>
        </section>
    )
}

export default AddMission
