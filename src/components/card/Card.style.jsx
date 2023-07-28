import styled from 'styled-components';

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export default CardWrapper;





export const CardDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 20rem;
    width: 20rem;
    max-width: 20rem;
    max-height: 20rem;
    transition: all 1s;
    background: ${({theme})=>theme.colors.cardBgColor};
    /* background-color:rgba(223, 168, 120,0.6); */
    padding: 0.5rem;
    border-radius: 1rem;
    margin: 0.7rem;
    box-shadow: rgba(0, 0, 0, 0.3) 3px 3px 10px 1px;
    h1{
    font-size: 1.2rem;
    text-align: center;
    overflow: hidden;
    height: 5rem;
}
img{
    min-height: 10rem;
    max-height: 10rem;
    border-radius: 10px;
}
button{
    font-weight: bold;
    padding: 0.7rem;
    outline: none;
    border: none;
    margin: 0.5rem;
    border-radius: 3px;
    cursor: pointer;
    background: ${({theme})=>theme.colors.cardButonBgColor};
    color:${({theme})=>theme.colors.cardButonTextColor};
    transition: all 0.3s;
    
    &:hover{
        transform: scale(0.9);
    }
}
    
`;

