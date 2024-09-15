// export  const usersArray = ['Dimych', 'Natasha', 'Valera', 'Katya']


export const usersObj = {
    '0': 'Dimych',
    '1': 'Natasha',
    '2': 'Valera',
    '3': 'Katya',
}
type  UsersType = {
    [key: string]: { id: number, name: string}
}
export let users: UsersType = {
    '101': {id: 101, name: 'Dimych' },
    '323212': {id: 323212, name: 'Natasha' },
    '1212': {id: 1212, name: 'Valera' },
    '1': {id: 1, name: 'Katya' },
}


// users[1]

let user = { id: 100500, name: 'Igor'}

users[user.id] = user;
delete users[user.id]

export const usersArray = [
    {id: 101, name: 'Dimych' },
    {id: 323212, name: 'Natasha' },
    {id: 1212, name: 'Valera' },
    {id: 1, name: 'Katya' }
]

usersArray.find(u => u.id ===1)
