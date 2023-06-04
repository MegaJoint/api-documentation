"use strict";(self.webpackChunkapi_documentation=self.webpackChunkapi_documentation||[]).push([[2695],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),u=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=u(e.components);return a.createElement(l.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(t),h=r,m=c["".concat(l,".").concat(h)]||c[h]||d[h]||o;return t?a.createElement(m,s(s({ref:n},p),{},{components:t})):a.createElement(m,s({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=h;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[c]="string"==typeof e?e:r,s[1]=i;for(var u=2;u<o;u++)s[u]=t[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},5162:(e,n,t)=>{t.d(n,{Z:()=>s});var a=t(7294),r=t(6010);const o={tabItem:"tabItem_Ymn6"};function s(e){let{children:n,hidden:t,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,s),hidden:t},n)}},4866:(e,n,t)=>{t.d(n,{Z:()=>I});var a=t(7462),r=t(7294),o=t(6010),s=t(2466),i=t(6550),l=t(1980),u=t(7392),p=t(12);function c(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}function d(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??c(t);return function(e){const n=(0,u.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const a=(0,i.k6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l._X)(o),(0,r.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(a.location.search);n.set(o,e),a.replace({...a.location,search:n.toString()})}),[o,a])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,o=d(e),[s,i]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:o}))),[l,u]=m({queryString:t,groupId:a}),[c,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,o]=(0,p.Nk)(t);return[a,(0,r.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:a}),g=(()=>{const e=l??c;return h({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{g&&i(g)}),[g]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),f(e)}),[u,f,o]),tabValues:o}}var g=t(2389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:n,block:t,selectedValue:i,selectValue:l,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),d=e=>{const n=e.currentTarget,t=p.indexOf(n),a=u[t].value;a!==i&&(c(n),l(a))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=p.indexOf(e.currentTarget)+1;n=p[t]??p[0];break}case"ArrowLeft":{const t=p.indexOf(e.currentTarget)-1;n=p[t]??p[p.length-1];break}}n?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},n)},u.map((e=>{let{value:n,label:t,attributes:s}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,key:n,ref:e=>p.push(e),onKeyDown:h,onClick:d},s,{className:(0,o.Z)("tabs__item",y.tabItem,s?.className,{"tabs__item--active":i===n})}),t??n)})))}function k(e){let{lazy:n,children:t,selectedValue:a}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a}))))}function v(e){const n=f(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",y.tabList)},r.createElement(b,(0,a.Z)({},e,n)),r.createElement(k,(0,a.Z)({},e,n)))}function I(e){const n=(0,g.Z)();return r.createElement(v,(0,a.Z)({key:String(n)},e))}},4366:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var a=t(7462),r=(t(7294),t(3905)),o=t(4866),s=t(5162);const i={sidebar_position:2},l="Scheduled Message",u={unversionedId:"Intergration/schedule-message",id:"Intergration/schedule-message",title:"Scheduled Message",description:"This is scheduled Messages there are few parameters that may change on the request body such as",source:"@site/docs/Intergration/schedule-message.md",sourceDirName:"Intergration",slug:"/Intergration/schedule-message",permalink:"/docs/Intergration/schedule-message",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Intergration/schedule-message.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Sending Messages",permalink:"/docs/Intergration/sending-messages"},next:{title:"File message",permalink:"/docs/Intergration/file-message"}},p={},c=[],d={toc:c},h="wrapper";function m(e){let{components:n,...t}=e;return(0,r.kt)(h,(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"scheduled-message"},"Scheduled Message"),(0,r.kt)("p",null,"This is scheduled Messages there are few parameters that may change on the request body such as\nstartTime, startDate, endDate, scheduledOption.\nTo ensure successful communication with the API, please include the following headers in all your requests:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Content-Type: application/json"),(0,r.kt)("li",{parentName:"ul"},"Accept: application/json")),(0,r.kt)("p",null,"The API responses will be returned in the following format:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n  "success": true|false,\n  "message": "response message",\n  "data": { ... }\n}\n')),(0,r.kt)("p",null,"You can access the status code of the response using the response's status code parameter."),(0,r.kt)("p",null,"By following these guidelines, you can effectively interact with the API and interpret the responses. If you have any further questions or need assistance, please let us know."),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"javascript",label:"Javascript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'// Set up the API endpoint URL\nconst apiUrl = `https://dev.hudumasms.com/api/send-sms`\nconst token = `Your token from profile page`\n\n// Define the payload for the API request\nconst payload = {\nsender_id: 2,\nsms: "Hello",\nschedule:"daily", //scheduled options "none","daily", "weekly", "monthly"\nstart_date:"2023-06-05", // year-month-date\nend_date:"2023-06-07", //year-month-date\ntime:\'8:27\',\nrecipients: [{ number: 255712500282 }, { number: 255766296543 }]\n};\n\n// Make the API request using the fetch function\nconst response = await fetch(apiUrl, {\nmethod: \'POST\',\nbody: JSON.stringify(payload),\nheaders: {\n  \'Content-Type\': \'application/json\',\n  \'Accept\': \'application/json\',\n  \'Authorization\': `Bearer ${token}`\n}\n});\n\n// Handle the response from the API\nif (response.ok) {\nconst data = await response.json();\nconsole.log("API response:", data);\n} else {\nconsole.error("API request failed with status:", response.status);\n}\n')),(0,r.kt)("p",null,"The code snippet demonstrates how to use JavaScript's ",(0,r.kt)("inlineCode",{parentName:"p"},"fetch")," function to make a POST request to the HudumaSMS API. It sets up the API endpoint URL, defines the payload object with the necessary information, and includes the required headers, including the ",(0,r.kt)("inlineCode",{parentName:"p"},"Authorization")," header with the bearer token."),(0,r.kt)("p",null,"After making the request, the code handles the response by checking if it is successful (",(0,r.kt)("inlineCode",{parentName:"p"},"response.ok"),"). If it is, it extracts the JSON response using ",(0,r.kt)("inlineCode",{parentName:"p"},"response.json()")," and logs it to the console. If the request fails, it logs the corresponding error status.")),(0,r.kt)(s.Z,{value:"php",label:"PHP",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n// Set up the API endpoint URL\n$apiUrl = 'https://dev.hudumasms.com/api/send-sms';\n$token = 'Your token from profile page';\n\n// Define the payload for the API request\n$payload = [\n    'sender_id' => 2,\n    'sms' => 'Hello',\n    'schedule' => 'daily', // scheduled options \"none\",\"daily\", \"weekly\", \"monthly\"\n    'start_date' => '2023-06-05', // year-month-date\n    'end_date' => '2023-06-07', // year-month-date\n    'time' => '8:27',\n    'recipients' => [\n        ['number' => 255712500282],\n        ['number' => 255766296543]\n    ]\n];\n\n// Set the HTTP headers\n$headers = [\n    'Content-Type: application/json',\n    'Accept: application/json',\n    'Authorization: Bearer ' . $token\n];\n\n// Create a stream context with the headers and payload\n$context = stream_context_create([\n    'http' => [\n        'method' => 'POST',\n        'header' => implode(\"\\r\\n\", $headers),\n        'content' => json_encode($payload)\n    ]\n]);\n\n// Send the API request and get the response\n$response = file_get_contents($apiUrl, false, $context);\n\n// Handle the response from the API\nif ($response !== false) {\n    $data = json_decode($response, true);\n    echo 'API response: ' . print_r($data, true);\n} else {\n    echo 'API request failed.';\n}\n?>\n\n")),(0,r.kt)("p",null,"In the PHP code above, we set the API endpoint URL to ",(0,r.kt)("inlineCode",{parentName:"p"},"$url")," and the API token to ",(0,r.kt)("inlineCode",{parentName:"p"},"$token"),". The payload is defined as an associative array in the ",(0,r.kt)("inlineCode",{parentName:"p"},"$data")," variable, containing the ",(0,r.kt)("inlineCode",{parentName:"p"},"sender_id"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"sms"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"recipients")," information."),(0,r.kt)("p",null,"We then set up the necessary options for the HTTP request, including the headers and method (",(0,r.kt)("inlineCode",{parentName:"p"},"POST"),"). The payload data is encoded as JSON using ",(0,r.kt)("inlineCode",{parentName:"p"},"json_encode()")," and included in the request."),(0,r.kt)("p",null,"Using ",(0,r.kt)("inlineCode",{parentName:"p"},"stream_context_create()"),", we create the stream context with the specified options. Then, we make the API request using ",(0,r.kt)("inlineCode",{parentName:"p"},"file_get_contents()")," with the URL, stream context, and ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," parameter to disable SSL verification."),(0,r.kt)("p",null,"The response is stored in the ",(0,r.kt)("inlineCode",{parentName:"p"},"$response")," variable. We decode the JSON response using ",(0,r.kt)("inlineCode",{parentName:"p"},"json_decode()")," and check if it's valid. If valid, you can handle the API response as needed. In the example, we simply use ",(0,r.kt)("inlineCode",{parentName:"p"},"var_dump()")," to display the response data. If the API response is invalid or the request fails, appropriate error messages are displayed."),(0,r.kt)("p",null,"Feel free to modify the code snippet based on your specific requirements, such as adjusting the payload or handling the API response differently."),(0,r.kt)("p",null,"If you have any further questions, feel free to ask!")),(0,r.kt)(s.Z,{value:"jave",label:"Java",mdxType:"TabItem"},"Apologies for the oversight in the previous code snippet. The code provided was missing the handling of the response using the `HttpURLConnection` class. Here's an updated version of the code that includes the necessary modifications:",(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'\nimport java.io.BufferedReader;\nimport java.io.IOException;\nimport java.io.InputStreamReader;\nimport java.io.OutputStream;\nimport java.net.HttpURLConnection;\nimport java.net.URL;\n\npublic class SendSMS {\n    public static void main(String[] args) {\n        String apiUrl = "https://dev.hudumasms.com/api/send-sms";\n        String token = "Your token from profile page";\n\n        // Define the payload for the API request\n        String payload = "{\\n" +\n                "    \\"sender_id\\": 2,\\n" +\n                "    \\"sms\\": \\"Hello\\",\\n" +\n                "    \\"schedule\\": \\"daily\\",\\n" +\n                "    \\"start_date\\": \\"2023-06-05\\",\\n" +\n                "    \\"end_date\\": \\"2023-06-07\\",\\n" +\n                "    \\"time\\": \\"8:27\\",\\n" +\n                "    \\"recipients\\": [\\n" +\n                "        { \\"number\\": 255712500282 },\\n" +\n                "        { \\"number\\": 255766296543 }\\n" +\n                "    ]\\n" +\n                "}";\n\n        try {\n            URL url = new URL(apiUrl);\n            HttpURLConnection connection = (HttpURLConnection) url.openConnection();\n            connection.setRequestMethod("POST");\n            connection.setRequestProperty("Content-Type", "application/json");\n            connection.setRequestProperty("Accept", "application/json");\n            connection.setRequestProperty("Authorization", "Bearer " + token);\n            connection.setDoOutput(true);\n\n            OutputStream os = connection.getOutputStream();\n            os.write(payload.getBytes());\n            os.flush();\n            os.close();\n\n            int responseCode = connection.getResponseCode();\n            if (responseCode == HttpURLConnection.HTTP_OK) {\n                BufferedReader in = new BufferedReader(new InputStreamReader(connection.getInputStream()));\n                String inputLine;\n                StringBuilder response = new StringBuilder();\n\n                while ((inputLine = in.readLine()) != null) {\n                    response.append(inputLine);\n                }\n                in.close();\n\n                System.out.println("API response: " + response.toString());\n            } else {\n                System.out.println("API request failed with status: " + responseCode);\n            }\n        } catch (IOException e) {\n            e.printStackTrace();\n        }\n    }\n}\n\n')),(0,r.kt)("p",null,"In this updated code snippet, the response is handled properly by checking the response code. If the response code is ",(0,r.kt)("inlineCode",{parentName:"p"},"HttpURLConnection.HTTP_OK"),", we read the response from the input stream using ",(0,r.kt)("inlineCode",{parentName:"p"},"connection.getInputStream()"),". If the response code indicates an error, we read the error stream using ",(0,r.kt)("inlineCode",{parentName:"p"},"connection.getErrorStream()"),"."),(0,r.kt)("p",null,"The response is then read and stored in a ",(0,r.kt)("inlineCode",{parentName:"p"},"StringBuilder")," called ",(0,r.kt)("inlineCode",{parentName:"p"},"response"),". Finally, the ",(0,r.kt)("inlineCode",{parentName:"p"},"response")," is printed to the console."))))}m.isMDXComponent=!0}}]);