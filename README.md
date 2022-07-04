# Performs a Deep Search of all Reddit Comments within a  selected Community
Uses reddit API data to: First, collect all the urls of the top 25 reddit posts of the selected community; Secondly, search each individual .json page of the url to see if comment text contain the input search.

# Intended uses:
To search stock tickers in investing communities.

![homepage](https://i.imgur.com/pWZTKqo.png)

# Scrolling through the comments:

![scrolling-homepage](https://i.imgur.com/vQQnijN.png)

# Errors:
1. useEffect not correctly being called from SearchInput.js search from. Sometimes requires refresh between uses.
2. API data goes down perodically for certain communities from Reddit's end and can cause crash

# Future features:
1. Use further API data from user page.
2. Meaning feedback outside of console.log
3. Better search definitions