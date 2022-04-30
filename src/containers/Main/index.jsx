import React, {memo, useCallback, useState, useEffect} from "react";
import api from "../../api";
import { ContainerStyled } from "../../style.js";
import Board from "./components/Board.jsx";
import Panel from './components/Panel.jsx'



function Main () {
    const [data, setData] = useState({})
    const [country, setCountry] = useState('brazil')
    const updateAt = new Date().toLocaleString()

    const getCovidData = useCallback((country) => {
        api.getCountry(country)
            .then(data => setData(data))
    }, [])

    useEffect(() => {    
        getCovidData(country)
      }, [getCovidData, country])

      const handleChange = ({ target }) => {
        const country = target.value
        setCountry(country)
      }

    return (
        <ContainerStyled>
            <div className="mb-2">
                <Panel
                    data={data}
                    updateAt={updateAt}
                    onChange={handleChange}
                    country={country}
                    getCovidData={getCovidData}
                />
            </div>
            <Board data={data} />
        </ContainerStyled>
    )
}

export default memo(Main)