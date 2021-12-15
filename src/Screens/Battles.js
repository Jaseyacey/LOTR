import React, { useState } from 'react'
import styled from 'styled-components';
import {FlatList, ScrollView} from 'react-native';
import { List, Button } from 'react-native-paper';

const Battles = ({ navigation }) => { 
    let characterApi = 'https://tolkien-api.herokuapp.com/Battles/random'
    const [culture, setCulture] = useState([]);
    const [name, setName] = useState([]);
    const [conflict, setConflict] = useState([]);
    const [location, setLocation] = useState([]);
    const [text, setText] = useState(['']);
    const [character, setCharacter] = useState('')
    const [date, setDate] = useState('')
    const [outcome, setOutcome] = useState('')
    const handleSubmit = async () => {
        console.log("CHarcter call ", characterApi)
            const resp = await fetch(characterApi);
            const data = await resp.json();
            setLocation([data.location])
            setName([data.name])
            setConflict([data.conflict])
            setDate([data.date])
            setOutcome([data.outcome])
            setText([data.text])
            console.log("data", data)
    }
    return (
        <>
            <Header>
                <LargeText>Random Battle</LargeText>
            </Header>
            <Choices>
                <Button
                    onPress={handleSubmit}
                    style={{height: 50, width: 331, borderColor: 'black', borderWidth: 5, borderRadius: 25, alignSelf: 'center',}}
                >
                    Random Battle
                </Button>
                <List.Item
                
                
                />
                <ScrollView>
                <ListText>Location: {"\n"}{[location]}{"\n"}</ListText>
                <ListText>Name: {"\n"}{[name]}{"\n"}</ListText>
                <ListText>Outcome: {"\n"}{[outcome]}{"\n"}</ListText>
                <ListText>Conflict: {"\n"}{[conflict]}{"\n"}</ListText>
                <ListText>Date: {"\n"}{[date]}{"\n"}</ListText>
                <ListText>Text: {"\n"}{[text]}{"\n"}</ListText>
                </ScrollView>
            </Choices>
        </>
    )
}

export default Battles

const Header = styled.View`
    background_color: #FFFFFF;
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
    background_color: white;
`