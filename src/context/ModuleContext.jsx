import React, { createContext, useContext, useState } from 'react';


const ModuleContext = createContext();

export const ModuleProvider = ({children}) => {      
 const [selectedModule, setSelectedModule] = useState(null);

    return (
        <ModuleContext.Provider value={{selectedModule, setSelectedModule}}>
            {children}
        </ModuleContext.Provider>
    );
}

export const useModules = () => useContext(ModuleContext);
