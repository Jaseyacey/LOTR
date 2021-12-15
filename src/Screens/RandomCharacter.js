import React, { useState } from 'react'
import styled from 'styled-components';
import {FlatList, ScrollView} from 'react-native';
import { List, TextInput } from 'react-native-paper';
import {getCharacterByName} from '../Components/characters';

const RandomCharacter = ({ navigation }) => { 
    let characterApi = 'https://tolkien-api.herokuapp.com/Characters/random/'
    const [birth, setBirth] = useState([]);
    const [name, setName] = useState([]);
    const [death, setDeath] = useState([]);
    const [title, setTitle] = useState([]);
    const [weapon, setWeapon] = useState([]);
    const [character, setCharacter] = useState('')
    const [text, setText] = useState('')
    const [race, setRace] = useState('')
    const handleSubmit = async () => {
        console.log("Character call ", characterApi + character)
            const resp = await fetch(characterApi + character);
            const data = await resp.json();
            setBirth([data.birth])
            setName([data.name])
            setDeath([data.death])
            setTitle([data.titles])
            setWeapon([data.weapon])
            setRace([data.race])
            setText([data.text])
            console.log("data", data)
    }
    return (
        <>
            <Header>
                <LargeText>Random Character</LargeText>
            </Header>
            <Choices>
                <TextBox>
                <List.Item
                    onPress={handleSubmit}
                    title="Choose Character"
                />
                </TextBox>
                <ScrollView>
                <ListText>{"\n"}</ListText>
                <ListText>Title: {"\n"}{[title]}{"\n"}</ListText>
                <ListText>Name: {"\n"}{[name]}{"\n"}</ListText>
                <ListText>Race: {"\n"}{[race]}{"\n"}</ListText>
                <ListText>Birth: {"\n"}{[birth]}{"\n"}</ListText>
                <ListText>Death: {"\n"}{[death]}{"\n"}</ListText>
                <ListText>Weapon: {"\n"}{[weapon]}{"\n"}</ListText>
                <ListText>Weapon: {"\n"}{[text]}{"\n"}</ListText>
                </ScrollView>
            </Choices>
        </>
    )
}

export default RandomCharacter

const Header = styled.View`
    justifyContent: flex-start;
    align_self: center;
    width: 100%;
    height: 15%;
    padding_top: 15%;
`;
const LargeText = styled.Text`
    font_size: 35px;
    align_self: center;
    font_weight: 600;
`;
const ListText = styled.Text`
    font_size: 15px;
    align_self: flex-start;
    font_weight: 600;
    padding_left: 28px;
`;
const Choices = styled.View`
    flex; 1;
    justify_content: center;
`
const TextBox = styled.View`
    width: 331px;
    align_self: center;
    border_radius: 25px;
    background_color: white;
`;
