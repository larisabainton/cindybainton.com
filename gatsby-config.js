module.exports = {
    siteMetadata: {
        title: 'Cindy Bainton',
        description: 'Cindy Bainton',
        content: 'Cindy Bainton',
        name: 'Cindy Bainton',
        links: [
            { name: 'facebook', url: 'https://www.facebook.com/CindyBainton/' },
        ],
        sections: [
            { name: 'intro', title: 'Cindy Bainton', text: 'Watercolor Designs' },
            {
                name: 'gallery', headerTitle: 'Gallery', title: 'Gallery', text: 'See some examples below of Cindy\'s art', videos: '',
            },
            {
                name: 'contact', headerTitle: 'Contact', title: 'Say Hello.', text: 'Keep in touch',
            },
        ],
        descriptions: [
            { headerTitle: 'About', title: 'About the Artist', text: 'Cindy Bainton is an artist with many years of experience in textile design, botanical drawing, and watercolor art. She is best known for her whimsical card designs. Cindy now works from her home in North Carolina, where she lives with her husband, Keith, and their cat, Lily.' },
            { headerTitle: 'Shop', title: 'Shop', text: '' },
        ],
    },
    plugins: ['gatsby-plugin-react-helmet', 'gatsby-plugin-sass', 'gatsby-plugin-eslint'],
};
