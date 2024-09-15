export type UserType = {
    name: string;
    hair: number;
    address: { city: string, house?: number };
};

export type LaptopType = {
    title: string
}

export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}

export type UserWithBooksType = UserType & {
    books: Array<string>
}
type CompanyType = {id: number, title: string}

export type WithCompaniesType ={
    companies: Array<CompanyType>
}

export function makeHairstyle(u: UserType, power:number) {
    const copy = {
        ...u,
        hair: u.hair / power
    }

    return copy
}
export function moveUser(u: UserWithLaptopType , city:string) {
    const copy = {
        ...u,
        address: {
            ...u.address,
            city: city
        }
    }

    // copy.address = {
    //     ...copy.address,
    //     city: city
    // }

    return copy
}
export function upgradeUserLaptop(u: UserWithLaptopType , title:string) {
    const copy = {
        ...u,
        laptop: {
            ...u.laptop,
            title:  title
        }
    }

    return copy
}


export function moveUserToOtherHouse(u: UserWithLaptopType & UserWithBooksType , house:number) {
    return  {
        ...u,
        address: {
            ...u.address,
            house: house
        }
    }
}
export function addNewBooksToUser(u: UserWithLaptopType & UserWithBooksType, newBooks:Array<string>) {
    return  {
        ...u,
        books: [
            ...u.books,
            ...newBooks
        ]
    }
}
export function updateBook(u: UserWithLaptopType & UserWithBooksType,
                           oldBook: string,
                           newBook:string) {
    return  {
        ...u,
        books: u.books.map(b => b === oldBook ? newBook: b)
    }
}
export function removeBook(u: UserWithLaptopType & UserWithBooksType, deleteBook:string) {
    return  {
        ...u,
        books: u.books.filter(b => b !== deleteBook)
    }
}

export function addNewCompanies(u: UserWithLaptopType & WithCompaniesType,
                                id: number,
                                title:string) {
   return  {
        ...u,
        companies: [
            ...u.companies,
            {id, title}
        ]
    }
}

export function updateCompanyTitle(u: UserWithLaptopType & WithCompaniesType,
                           id: number,
                           title:string) {
    return  {
        ...u,
        companies: u.companies.map(c => c.id === id ? {...c, title}: c)
    }
}

export const updateCompanyTitle2 = (companies: { [key: string]: Array<CompanyType>},
                                    userName: string,
                                    companyId: number,
                                    newTitle: string) => {
    let companyCopy = {...companies}
    companyCopy[userName] = companyCopy[userName].map(c => c.id === companyId ? {...c, title: newTitle}: c )

    return companyCopy
}