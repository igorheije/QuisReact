import styled from 'styled-components'
import db from '../../db.json'

export const Card = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  border: 2px solid ${db.theme.colors.primary};
  background-color: #1c1814;
  border-radius: 4px;
  overflow: hidden;
  h1{
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
  }
  p{
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
  }
`
Card.Title = styled.header`
    padding: 10px 20px;
    background-color: ${db.theme.colors.primary};
    margin: 0;
`
Card.Form= styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px 25px;
  input{
    font-size: 16px;
    padding: 10px;
    border-radius: 4px;
    background-color: transparent;
    color: rgba(255, 255, 255, 0.5);
    outline: none;
    border: 1px solid;
    margin-bottom: 10px;
  }
  button{
    font-size: 16px;
    padding: 10px;
    border-radius: 4px;
    outline: none;
    background-color: rgba(255, 255, 255, 0.5);
    color: white;
    border: none;
    margin-top: 10px;
    cursor: pointer;
    transition: .5s;
  }

  button:hover{
    background-color: ${db.theme.colors.primary};

  }
`
Card.Link= styled.div`
    font-size: 16px;
    padding: 10px;
    border-radius: 4px;
    background-color: ${db.theme.colors.primary};
    color: white;
    border: none;
    margin-top: 10px;
`
