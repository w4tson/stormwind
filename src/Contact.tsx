import styled from "styled-components";
import { FaPhone } from "react-icons/fa6";
import { RiContactsBookLine } from "react-icons/ri";


const aPartyColor = '#9b51e0'
const bPartyColor = '#f78da7'
const height = 150;
const aPartyX = 230;
const aPartyY = height/2;
const nodeSize = 32;
const ringGap = 3
const aToBDistance = 400
const widthOfCountText = 5;

const data = {
    aParty: '07883957738',
    to: '07934739947',
    count: 14
}

export const Contact = () => {
    return (
        <ContactCard>

            <svg version="2.0" height={height} width="100%" style={{background: '#ddd'}}>
                <text x={aPartyX - 170} y={aPartyY + 5}>{data.aParty}</text>

                <circle r={nodeSize} cx={aPartyX} cy={aPartyY} fill={aPartyColor}/>
                <g transform={`translate(${aPartyX - 12},${aPartyY - 12})`}>
                    <FaPhone style={{color: "white"}} size={26}></FaPhone>
                </g>

                <circle r={nodeSize + ringGap} cx={aPartyX} cy={aPartyY} stroke={aPartyColor} fill="none"/>

                <path d={`M${aPartyX + nodeSize + ringGap},${aPartyY} L${aToBDistance - nodeSize - ringGap},${aPartyY}`}
                      stroke={aPartyColor}></path>
                <text x={((aPartyX + aToBDistance) / 2) - widthOfCountText} y={aPartyY - 5}>{data.count}</text>

                <g transform={`translate(${aPartyX -50},${aPartyY -12}) scale(0.7 0.7)`}>

                    <circle r={22} cx={13} cy={12} fill={bPartyColor}/>
                    <RiContactsBookLine style={{color: "white"}} size={26}/>
                </g>

                <circle r={nodeSize} cx={aToBDistance} cy={aPartyY} fill={bPartyColor}/>
                <circle r={nodeSize + ringGap} cx={aToBDistance} cy={aPartyY} stroke={bPartyColor} fill="none"/>
                <text x={aToBDistance + nodeSize + 20} y={aPartyY + 5}>{data.aParty}</text>


            </svg>
        </ContactCard>
    )
}

const ContactCard = styled.div`
    min-height: 100px;
    background: white;
    border-top: 1px solid #ccc;
`
