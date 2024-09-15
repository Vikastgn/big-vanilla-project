
function icreaseAge(u: UserType) {
    u. age++
}

type UserType = {
    name: string
    age: number
}
test ('big test', () => {

    let users = [
        {
            name: 'Dimych',
            age: 32
        },
        {
            name: 'Dimych',
            age: 32
        }
    ]
    let admins = users

    users.push({ name: 'Bandyugan', age: 10})

    expect(admins[2]).toEqual({name: 'Bandyugan', age: 10} )

    // icreaseAge(user)
    //
    // expect(user.age).toBe( 33)
})