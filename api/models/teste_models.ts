interface TypesTeste {
    text: string
    time: string
    timeInSeconds: number
    link: string
}

const myArray: TypesTeste[] = [
  {
    text: "Lorem ipsum dolor sit amet",
    time: "12:30 PM",
    timeInSeconds: 45000,
    link: "https://example.com/page1"
  },
  {
    text: "Consectetur adipiscing elit",
    time: "1:45 PM",
    timeInSeconds: 63000,
    link: "https://example.com/page2"
  },
  {
    text: "Sed do eiusmod tempor incididunt",
    time: "3:20 PM",
    timeInSeconds: 82800,
    link: "https://example.com/page3"
  },
  {
    text: "Ut enim ad minim veniam",
    time: "4:55 PM",
    timeInSeconds: 17700,
    link: "https://example.com/page4"
  },
  {
    text: "Quis nostrud exercitation ullamco",
    time: "6:10 PM",
    timeInSeconds: 22200,
    link: "https://example.com/page5"
  },
  {
    text: "Laboris nisi ut aliquip ex ea commodo consequat",
    time: "7:25 PM",
    timeInSeconds: 26700,
    link: "https://example.com/page6"
  },
  {
    text: "Duis aute irure dolor in reprehenderit",
    time: "8:40 PM",
    timeInSeconds: 31200,
    link: "https://example.com/page7"
  },
  {
    text: "Voluptate velit esse cillum dolore",
    time: "9:55 PM",
    timeInSeconds: 35700,
    link: "https://example.com/page8"
  },
  {
    text: "Eu fugiat nulla pariatur",
    time: "11:10 PM",
    timeInSeconds: 40200,
    link: "https://example.com/page9"
  },
  {
    text: "Excepteur sint occaecat cupidatat non proident",
    time: "12:25 AM",
    timeInSeconds: 44700,
    link: "https://example.com/page10"
  }
];

const getTestesData = () => {
    return myArray
}

export { getTestesData };
export type { TypesTeste };
