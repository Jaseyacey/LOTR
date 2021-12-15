import React, { useState } from 'react'
import styled from 'styled-components';
import {FlatList, ScrollView} from 'react-native';
import { List, TextInput } from 'react-native-paper';
import {getCharacterByName} from '../Components/characters';

const ChooseData = ({ navigation }) => { 
    let characterApi = 'https://tolkien-api.herokuapp.com/Artefacts/by/'
    const [name, setName] = useState([]);
    const [appearance, setAppearance] = useState([]);
    const [location, setLocation] = useState([]);
    const [character, setCharacter] = useState('')
    const [text, setText] = useState('')
    const [usage, setUsage] = useState('')
    const handleSubmit = async () => {
        console.log("CHarcter call ", characterApi + character)
            const resp = await fetch(characterApi + character);
            const data = await resp.json();
            setAppearance([data[0].appearance])
            setName([data[0].name])
            setLocation([data[0].location])
            setUsage([data[0].usage])
            setText([data[0].text])
            console.log("data", data)
    }
    return (
        <>
            <Header>
                <LargeText>Choose A Character</LargeText>
            </Header>
            <Choices>
                <TextBox>
                <TextInput
                    label="See their Artefacts"
                    value={character}
                    onChangeText={character => setCharacter(character)}
                />
                <List.Item
                    onPress={handleSubmit}
                    title="See their Artefacts"
                />
                </TextBox>
                <ScrollView>
                <ListText>{"\n"}</ListText>
                <ListText>Name: {"\n"}{[name]}{"\n"}</ListText>
                <ListText>Appearance: {"\n"}{[appearance]}{"\n"}</ListText>
                <ListText>Location: {"\n"}{[location]}{"\n"}</ListText>
                <ListText>Usage: {"\n"}{[usage]}{"\n"}</ListText>
                <ListText>Weapon: {"\n"}{[text]}{"\n"}</ListText>
                </ScrollView>
            </Choices>
        </>
    )
}

export default ChooseData

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
