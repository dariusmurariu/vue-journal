export default () => ({
    isLoading: true,
    entries: [
        {
            id: new Date().getTime(),
            date: new Date().toDateString(),
            text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit lobortis, placerat nunc justo blandit habitasse ultrices sodales, fames pellentesque conubia inceptos donec sem scelerisque.',
            picture: null
        },
        {
            id: new Date().getTime() + 100,
            date: new Date().toDateString(),
            text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit lobortis, placerat nunc justo blandit habitasse ultrices sodales, fames pellentesque conubia inceptos donec sem scelerisque.',
            picture: null
        },
        {
            id: new Date().getTime() + 200,
            date: new Date().toDateString(),
            text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit lobortis, placerat nunc justo blandit habitasse ultrices sodales, fames pellentesque conubia inceptos donec sem scelerisque.',
            picture: null
        }
    ]
})