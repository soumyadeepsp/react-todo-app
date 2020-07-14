import React, {useState} from 'react'
import { ListItemText, List , ListItem, Button, ListItemAvatar, Modal} from '@material-ui/core'
import './todo.css'
import {db} from "./firebase";
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper : {
        position : 'absolute',
        width : 400,
        backgroundColor : theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2,4,3)
    },
}))

function Todo(props) {
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState('');
    const classes = useStyles();
    const handleOpen = () => {
        setOpen(true);
    };
    const updateTodo = () => {
        db.collection('todos').doc(props.todo.id).set({
            todo : input
        }, {merge : true});
        setOpen(false)
    }
    return (
        <>
        <Modal
            open = {open}
            onClose = {e => setOpen(false)}
            onOpen = {e => setOpen(true)}
        >
            <div className={classes.paper}>
                <h1> open </h1>
                <input placeholder={props.todo.todo} value={input} onChange={e => setInput(e.target.value)}/>
                <Button onClick={updateTodo}>Update Todo</Button>
            </div>
        </Modal>
        <List className="todo_list">
            <ListItem>
                <ListItemAvatar>
                </ListItemAvatar>
                <ListItemText primary={props.todo.todo} secondary="Todo" />
            </ListItem>
            <Button onClick={e=>setOpen(true)}>Edit</Button>
            <Button onClick={event => db.collection('todos').doc(props.todo.id).delete()}> ❌ Delete </Button>
        </List>
        </>
    )
}

export default Todo