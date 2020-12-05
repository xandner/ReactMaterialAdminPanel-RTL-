import React, {useEffect, useState} from 'react';
import PageTitle from "../../components/PageTitle";
import {Button, Grid, TextField} from "@material-ui/core";
import {toast} from "react-toastify";

const EditBook = (props) => {

    const [book,setBook]=useState({})

    useEffect(() => {

        setBook(props.location.state || {})
    }, [])



    const setBookProprty=(key,e)=>{
        switch (key){
            case 'name':
                setBook({...book,name:e.target.value})
                break;
            case 'publisher':
                setBook({...book,publisher:e.target.value})
                break;
            case 'price':
                setBook({...book,price:e.target.value})
                break;
            case 'author':
                setBook({...book,author:e.target.value})
                break;
        }


    }

    const onBackPressed=()=>{
        props.history.push('/app/BookList')
        toast.warning("لغو شد")
    }

    return (
        <div>
            <PageTitle title={'ویرایش کتاب'} spacing={5}/>
            <Grid container direction={'column'} >
                <Grid item>
                    <TextField placeholder={'ناشر'} value={book.publisher} onChange={e=>{setBookProprty("publisher",e)}}/>
                </Grid>
                <Grid item>
                    <TextField placeholder={'قیمت'} type={'number'} value={book.price} onChange={e=>{setBookProprty("price",e)}}/>
                </Grid>
                <Grid item>
                    <TextField placeholder={'نویسنده'} value={book.author} onChange={e=>{setBookProprty("author",e)}}/>
                </Grid>
                <Grid item>
                    <TextField placeholder={'نام کتاب'} value={book.name} onChange={e=>{setBookProprty('name',e)}}/>
                </Grid>
                <Grid item>
                    <Button variant={'contained'}> ذخیره</Button><Button variant={'contained'} onClick={onBackPressed}>لغو</Button>
                </Grid>


            </Grid>

        </div>
    );
};

export default EditBook;