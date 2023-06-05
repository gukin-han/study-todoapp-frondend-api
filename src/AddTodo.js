import React, { useState } from 'react';
import { Button, Grid, TextField } from "@mui/material";

const AddTodo = (props) => {
    // 사용자의 입력을 지정할 오브젝트
    const [item, setItem] = useState({ title: ""});
    const addItem = props.addItem;

    // onButtonClick 함수 작성
    const onButtonClick = () => {
        addItem(item); // addItem 함수 사용
        setItem({ title: "" });
    }

    // enterKeyEnventHandler 함수
    const enterKeyEnventHandler = (e) => {
        if (e.key === 'Enter') {
            onButtonClick();
        }
    };

    // onInputchange 함수 작성
    const onInputChange = (e) => {
        setItem({title: e.target.value});
        console.log(item);
    }

    return (
        <Grid container style={{ marginTop: 20 }}>
            <Grid xs={11} md={11} item style={{ paddingRight: 16 }}>
                <TextField placeholder="Add Todo here" fullWidth onChange={onInputChange} onKeyPress={enterKeyEnventHandler} value={item.title} />
            </Grid>
            <Grid xs={1} md={1} item>
                <Button fullWidth style={{ height: '100%' }} color="secondary" variant="outlined" onClick={onButtonClick
                }>+</Button>
            </Grid>
        </Grid>

    );
}

export default AddTodo;