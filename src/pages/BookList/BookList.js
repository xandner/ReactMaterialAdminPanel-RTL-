import React, {useEffect, useState} from 'react';
import PageTitle from "../../components/PageTitle";
import {Button, Grid, IconButton} from "@material-ui/core";
import MUIDataTable from "mui-datatables";
import Widget from "../../components/Widget";
import Table from "../dashboard/components/Table/Table";
import mock from "../dashboard/mock";
import {Delete as DeleteIcon, Edit as EditIcon} from "@material-ui/icons"

const datatableData = [
    {
        id: 1,
        name: "کتاب اول",
        price: "2000",
        publisher: "ناشر 1",
        author: "احسان"
    },
    {
        id: 2,

        name: "کتاب دوم",
        price: "2000",
        publisher: "ناشر 2",
        author: "علی"
    },
    {
        id: 3,

        name: "نام سوم",
        price: "2000",
        publisher: "ناشر 3",
        author: "احسان"
    },
]

const BookList = () => {
    const onDelete = (item) => {
        let foundIndex = -1;
        books.forEach((itemBook, index) => {
                if (itemBook.id === item.id) {
                    foundIndex = index
                }
            }
        )
        console.log(foundIndex)
        setBooks(books => {
            return [...books.slice(0, foundIndex), ...books.slice(foundIndex + 1)]
        })

    }
    const transform = (data) => {
        return data.map(item => {
            return [
                item.name,
                item.price,
                item.publisher,
                item.author,
                <IconButton onClick={() => onDelete(item)}>
                    <DeleteIcon/>
                </IconButton>,
                <IconButton>
                    <EditIcon/>
                </IconButton>,
            ]
        })
    }

    const [books, setBooks] = useState([])
    useEffect(() => {
        setBooks(datatableData);
    }, [])

    return (
        <div>
            <PageTitle title={'لیست کتاب های موجود در انبار'}/>
            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <MUIDataTable
                        title="کتاب ها"
                        data={transform(books)}
                        columns={["نام کتاب", "قیمت", "ناشر", "نویسنده", "حذف", "ویرایش"]}
                        options={{
                            filterType: "checkbox",
                        }}
                    />
                </Grid>

            </Grid>
        </div>
    );
};

export default BookList;