import {
    addNewBooksToUser, addNewCompanies,
    makeHairstyle,
    moveUser,
    moveUserToOtherHouse, removeBook, updateBook, updateCompanyTitle, updateCompanyTitle2,
    upgradeUserLaptop,
    UserType,
    UserWithBooksType,
    UserWithLaptopType, WithCompaniesType
} from "./10_01";

test("change adress", () => {
    let user: UserType = {
        name: "Daniil",
        hair: 32,
        address: { city: "Minsk" },
    };

    const awesomeUser = makeHairstyle(user, 2);

    user = awesomeUser;

    expect(user.hair).toBe(16);
    expect(awesomeUser.hair).toBe(16);
    expect(awesomeUser.address).toBe(user.address)
})
test("change address", () => {
    let user: UserWithLaptopType = {
        name: "Daniil",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        }
    };

    const movedUser  = moveUser(user, 'Kiev');

    expect(user).not.toBe(movedUser);
    expect(user.address).not.toBe(movedUser.address);
    expect(user.laptop).toBe(movedUser.laptop)
    expect(movedUser.address.city).toBe('Kiev')
});
test("upgrade laptop to macbook", () => {
    let user: UserWithLaptopType = {
        name: "Daniil",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        }
    };

    const userCopy  = upgradeUserLaptop(user, 'Macbook');

    expect(user).not.toBe( userCopy);
    expect(user.address).toBe( userCopy.address);
    expect(user.laptop).not.toBe( userCopy.laptop)
    expect(userCopy.laptop.title).toBe('Macbook')
    expect(user.laptop.title).toBe('ZenBook')
});
test("change house", () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: "Daniil",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react']
    };

    const userCopy  = moveUserToOtherHouse(user, 99);

    expect(user).not.toBe( userCopy);
    expect(user.laptop).toBe( userCopy.laptop);
    expect(user.address).not.toBe(userCopy.address);
    expect(userCopy.address.house).toBe(99);

});
test("add books", () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: "Daniil",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react']
    };

    const userCopy  = addNewBooksToUser(user, ['ts','rest api']);

    expect(user).not.toBe( userCopy);
    expect(user.laptop).toBe( userCopy.laptop);
    expect(user.address).toBe(userCopy.address);
    expect(user.books).not.toBe( userCopy.books);
    expect(userCopy.books[4]).toBe('ts');
    expect(userCopy.books[5]).toBe('rest api');

});
test("update js to ts ", () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: "Daniil",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react']
    };

    const userCopy  = updateBook(user,'js', 'ts');

    expect(user).not.toBe( userCopy);
    expect(user.laptop).toBe( userCopy.laptop);
    expect(user.address).toBe(userCopy.address);
    expect(user.books).not.toBe( userCopy.books);
    expect(userCopy.books[2]).toBe('ts');
    expect(user.books.length).toBe(4);

});
test("remove js book ", () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: "Daniil",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react']
    };

    const userCopy  = removeBook(user,'js');

    expect(user).not.toBe( userCopy);
    expect(user.laptop).toBe( userCopy.laptop);
    expect(user.address).toBe(userCopy.address);
    expect(user.books).not.toBe( userCopy.books);
    expect(userCopy.books[2]).toBe('react');
    expect(user.books.length).toBe(4);
});
test("add new company", () => {
    let user: UserWithLaptopType &  WithCompaniesType = {
        name: "Daniil",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        companies: [{id: 1, title: 'Epam'},
            {id: 2, title: 'IT-INCUATOR'}
        ]
    };

    const userCopy  = addNewCompanies(user, 3,  'Google');

    expect(user).not.toBe( userCopy);
    expect(user.laptop).toBe( userCopy.laptop);
    expect(user.address).toBe(userCopy.address);
    expect(user.companies).not.toBe( userCopy.companies);
    expect(userCopy.companies[2].title).toBe('Google');
});
test("update company", () => {
    let user: UserWithLaptopType &  WithCompaniesType = {
        name: "Daniil",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        companies: [{id: 1, title: 'Епам'},
            {id: 2, title: 'IT-INCUATOR'}
        ]
    };

    const userCopy  = updateCompanyTitle(user,1, 'EPAM');

    expect(user).not.toBe( userCopy);
    expect(user.laptop).toBe( userCopy.laptop);
    expect(user.address).toBe(userCopy.address);
    expect(user.companies).not.toBe( userCopy.companies);
    expect(userCopy.companies[0].title).toEqual('EPAM');
});
test("update next company", () => {

    let companies = {
        'Dimych': [{id: 1, title: 'Епам'}, {id: 2, title: 'IT-INCUATOR'}],
        'Artem': [{id: 2, title: 'IT-INCUATOR'}]
    }

    const copy = updateCompanyTitle2(companies,'Dimych', 1, 'EPAM' );

    expect(copy['Dimych']).not.toBe(companies['Dimych'])
    expect(copy['Artem']).toBe(companies['Artem'])
    expect(copy['Dimych'][0].title).toBe('EPAM')

});