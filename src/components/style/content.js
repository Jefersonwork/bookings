import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #13131f;

  @media(max-width: 764px) {
    min-height: 100vh;
  }
`

export const Header = styled.header`
  width: 100%;
  height: 65px;
  padding: 15px 0;
  display: flex;
  justify-content: center;

  @media(max-width: 764px) {
    height: 0%;
  }
`

export const Title = styled.h1`
  font-size: 30px;
  color: #fff;
`

export const Card = styled.div`
  width: 450px;
  height: 140px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 15px;
  border-radius: 10px;
  background-image: url(${props => props.bg});
  background-repeat: no-repeat;
  background-size: 100% 100%;

  @media(max-width: 764px) {
    width: 350px;
    height: 100px;
  }
`

export const InfoContent = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  padding: 15px;
  border-radius: 0 0 10px 10px;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, .5);
`

export const InfoLocal = styled.h3`
  font-size: 25px;
  font-weight: bold;
  color: #fff;
`

export const InfoDate = styled.h4`
  font-size: 18px;
  font-weight: 500;
  color: #fff;
`