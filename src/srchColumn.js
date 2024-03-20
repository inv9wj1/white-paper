import React, { useState } from 'react';
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import './App.css';

function App() { 

    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState('');
    const [relatedLinks, setRelatedLinks] = useState('');
    const { Search } = Input;



const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#000000',
    }}
  />
);
const onSearch = (value, _e, info) => console.log(info?.source, value);
  


    const handleSearch = async () => {
        try {
          const response = await fetch(`https://api.duckduckgo.com/?q=${searchTerm}&format=json`);
          const data = await response.json();
          console.log("data is ",data);
          if (data.AbstractText === '') {
            console.log('is null');
            if (data.Heading) {
               setSearchTerm(data.Heading);
               setSearchResults("there is no specific item found on wikipedia, pls try the related links or search with that product name");
               console.log("search term is ",setSearchTerm);
        //        const len = data.RelatedTopics.length;
        //   console.log("length is ",len);
        //   const ent1 = data.RelatedTopics[1];
        //   console.log('ent1 is ',ent1);
        // for (let i = 0; i < data.RelatedTopics.length; i++) {
        //     console.log(`Element at index ${i}:`, data.RelatedTopics[i]);
        // }
        // Accessing the RelatedTopics array
const relatedTopics = data.RelatedTopics;
const textArray = [];
// Looping through each object in the RelatedTopics array
for (let i = 0; i < relatedTopics.length; i++) {
    const topic = relatedTopics[i];
    
    // Check if the object has the 'Text' property
    if (topic.Text) {
        console.log(`Related Topic ${i + 1}: ${topic.Text}`);
        // Check if the object has the 'Text' property
        textArray.push(topic.Text);
    }
    const concatenatedText = textArray.join('\n');
    setSearchResults("the keyword not found !!!! Related Topics are "+ concatenatedText) ;
}
   
            //    handleSearch(); // Call handleSearch recursively with the new search term
              return; // Exit the function to prevent further execution
            }
          }

          setSearchResults("Description: " + data.AbstractText + "\nRefer URL: " + data.AbstractURL 
          );
          
          const len = data.RelatedTopics.length;
          console.log("length is ",len);
          const ent1 = data.RelatedTopics[1];
          console.log('ent1 is ',ent1);
          setRelatedLinks("Related Topics: " + JSON.stringify(data.RelatedTopics, null, 2));
          console.log('data is',data);
           console.log('response is',data.AbstractText);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };




    return (
        <div>
        <Space className="srchColumn" direction="vertical">
    
    <Search
    type="text"
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    placeholder="Enter search term"

      enterButton="Search"
      size="large"
      suffix={suffix}
      onSearch={handleSearch}
    />
  </Space>
  <div>{searchResults}</div>
  
  </div>
    );



}



export default App;