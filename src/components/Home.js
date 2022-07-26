import React from 'react'
import * as S from '../components/style'

import NoPhoto from '../assets/nophoto.png'

export default function Home (){
  return(
    <S.ContainerHome>
        <S.MyPhoto src={NoPhoto} alt="nophoto"/>
        <S.Name>Matheus Braga, 27</S.Name>
        <S.HomeNav>
            <S.HomeList>
                <S.ListItem>About me</S.ListItem>
                <S.ListItem>Works</S.ListItem>
                <S.MyOdsLink href="https://odsmeubairro.netlify.app/"><S.ListItem>ODSs: Meu bairro</S.ListItem></S.MyOdsLink>
            </S.HomeList>
        </S.HomeNav>
    </S.ContainerHome>
  )
}