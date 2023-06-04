"use strict";(self.webpackChunkapi_documentation=self.webpackChunkapi_documentation||[]).push([[7736],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(t),m=a,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||s;return t?r.createElement(f,o(o({ref:n},c),{},{components:t})):r.createElement(f,o({ref:n},c))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,o=new Array(s);o[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var u=2;u<s;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5162:(e,n,t)=>{t.d(n,{Z:()=>o});var r=t(7294),a=t(6010);const s={tabItem:"tabItem_Ymn6"};function o(e){let{children:n,hidden:t,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(s.tabItem,o),hidden:t},n)}},4866:(e,n,t)=>{t.d(n,{Z:()=>k});var r=t(7462),a=t(7294),s=t(6010),o=t(2466),i=t(6550),l=t(1980),u=t(7392),c=t(12);function p(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}function d(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??p(t);return function(e){const n=(0,u.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const r=(0,i.k6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l._X)(s),(0,a.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(r.location.search);n.set(s,e),r.replace({...r.location,search:n.toString()})}),[s,r])]}function h(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,s=d(e),[o,i]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[l,u]=f({queryString:t,groupId:r}),[p,h]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,s]=(0,c.Nk)(t);return[r,(0,a.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:r}),g=(()=>{const e=l??p;return m({value:e,tabValues:s})?e:null})();(0,a.useLayoutEffect)((()=>{g&&i(g)}),[g]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),h(e)}),[u,h,s]),tabValues:s}}var g=t(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:n,block:t,selectedValue:i,selectValue:l,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),d=e=>{const n=e.currentTarget,t=c.indexOf(n),r=u[t].value;r!==i&&(p(n),l(r))},m=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},n)},u.map((e=>{let{value:n,label:t,attributes:o}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,key:n,ref:e=>c.push(e),onKeyDown:m,onClick:d},o,{className:(0,s.Z)("tabs__item",b.tabItem,o?.className,{"tabs__item--active":i===n})}),t??n)})))}function v(e){let{lazy:n,children:t,selectedValue:r}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},s.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r}))))}function w(e){const n=h(e);return a.createElement("div",{className:(0,s.Z)("tabs-container",b.tabList)},a.createElement(y,(0,r.Z)({},e,n)),a.createElement(v,(0,r.Z)({},e,n)))}function k(e){const n=(0,g.Z)();return a.createElement(w,(0,r.Z)({key:String(n)},e))}},5480:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var r=t(7462),a=(t(7294),t(3905)),s=t(4866),o=t(5162);const i={sidebar_position:3},l="File message",u={unversionedId:"Intergration/file-message",id:"Intergration/file-message",title:"File message",description:"The File message feature allows you to upload a contacts file in CSV (Comma-Separated Values) format. This file contains a list of phone numbers or contacts. The system will then send a message to each phone number listed in the file, allowing you to reach multiple recipients with a single action.",source:"@site/docs/Intergration/file-message.md",sourceDirName:"Intergration",slug:"/Intergration/file-message",permalink:"/docs/Intergration/file-message",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Intergration/file-message.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Scheduled Message",permalink:"/docs/Intergration/schedule-message"},next:{title:"Contacts",permalink:"/docs/category/contacts"}},c={},p=[],d={toc:p},m="wrapper";function f(e){let{components:n,...t}=e;return(0,a.kt)(m,(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"file-message"},"File message"),(0,a.kt)("p",null,"The File message feature allows you to upload a contacts file in CSV (Comma-Separated Values) format. This file contains a list of phone numbers or contacts. The system will then send a message to each phone number listed in the file, allowing you to reach multiple recipients with a single action."),(0,a.kt)("p",null,"This feature simplifies the process of sending messages to a large number of contacts by automating the message distribution based on the phone numbers provided in the CSV file. By leveraging the CSV format, you can easily organize and manage your contact information in a structured manner."),(0,a.kt)(s.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"javascript",label:"Javascript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const sendFileMessage = async() => {\n  try {\n    const formData = new FormData()\n    formData.append('contacts', selectedFile) // can be from html <input type=\"file\" />\n    formData.append('sender_id', 1)  //see the ID of the sender-ID on system dashboard\n    formData.append('message', \"Hello\")\n\n    const response = await fetch('https://dev.hudumasms.com/api/smses/file/send', {\n      method: 'POST',\n      body: formData,\n      headers: {\n        'Authorization': `Bearer ${token}`\n      },\n    });\n\n    const json = await response.json()\n\n    if (response.ok) {\n      console.log(json.message)\n    }\n\n    if (!response.ok) {\n      console.log(json.message);\n    }\n\n  } catch (err) {\n    console.log('Error while uploading file');\n  }\n}\n\n")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"sendFileMessage")," function handles the process of sending a file message."),(0,a.kt)("li",{parentName:"ol"},"The API endpoint URL is set to ",(0,a.kt)("inlineCode",{parentName:"li"},"'https://api.hudumasms.com/api/smses/file/send'"),"."),(0,a.kt)("li",{parentName:"ol"},"The response messages are logged to the console using ",(0,a.kt)("inlineCode",{parentName:"li"},"console.log")," instead of ",(0,a.kt)("inlineCode",{parentName:"li"},"toast")," for simplicity."),(0,a.kt)("li",{parentName:"ol"},"The necessary form data is appended to the ",(0,a.kt)("inlineCode",{parentName:"li"},"FormData")," object."),(0,a.kt)("li",{parentName:"ol"},"The API request is made using the ",(0,a.kt)("inlineCode",{parentName:"li"},"fetch")," function with the appropriate method, body, and headers."),(0,a.kt)("li",{parentName:"ol"},"The response is parsed as JSON using ",(0,a.kt)("inlineCode",{parentName:"li"},"response.json()"),"."),(0,a.kt)("li",{parentName:"ol"},"If the response is successful (",(0,a.kt)("inlineCode",{parentName:"li"},"response.ok"),"), the success message is logged and the necessary actions are taken."),(0,a.kt)("li",{parentName:"ol"},"If the response is not successful, the error message is logged and the error handler function is called."),(0,a.kt)("li",{parentName:"ol"},"Any errors that occur during the process are logged to the console."))),(0,a.kt)(o.Z,{value:"php",label:"PHP",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"\n<?php\n// Set up the API endpoint URL\n$apiUrl = 'https://dev.hudumasms.com/api/smses/file/send';\n\n// Set the request parameters\n$contactsFile = $_FILES['contacts'];\n$senderId = $_POST['sender_id'];\n$message = $_POST['message'];\n$token = 'Your token from profile page';\n\n// Create the request body\n$requestBody = array(\n    'sender_id' => $senderId,\n    'message' => $message\n);\n\n// Append the file to the request body\n$requestBody['contacts'] = new \\CURLFile($contactsFile['tmp_name'], $contactsFile['type'], $contactsFile['name']);\n\n// Set the request headers\n$requestHeaders = array(\n    'Authorization: Bearer ' . $token\n);\n\n// Create a new HTTP context\n$context = stream_context_create(array(\n    'http' => array(\n        'method' => 'POST',\n        'header' => $requestHeaders,\n        'content' => $requestBody\n    )\n));\n\n// Send the request and get the response\n$response = file_get_contents($apiUrl, false, $context);\n\n// Handle the response\nif ($response !== false) {\n    $responseData = json_decode($response, true);\n    if ($responseData['success']) {\n        echo 'Success: ' . $responseData['message'];\n        // Perform necessary actions on success\n    } else {\n        echo 'Error: ' . $responseData['message'];\n        // Handle error cases\n    }\n} else {\n    echo 'Error: Failed to send the request.';\n}\n?>\n\n\n"))),(0,a.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'\nimport java.io.*;\nimport java.net.HttpURLConnection;\nimport java.net.URL;\n\npublic class FileMessageSender {\n    public static void main(String[] args) {\n        String apiUrl = "https://dev.hudumasms.com/api/smses/file/send";\n        String token = "Your token from profile page";\n\n        try {\n            String filePath = "path/to/contacts.csv";\n            File contactsFile = new File(filePath);\n\n            // Set request parameters\n            String senderId = "2";\n            String message = "Hello";\n\n            // Create a new HTTP connection\n            URL url = new URL(apiUrl);\n            HttpURLConnection connection = (HttpURLConnection) url.openConnection();\n            connection.setRequestMethod("POST");\n            connection.setDoOutput(true);\n\n            // Set request headers\n            connection.setRequestProperty("Content-Type", "multipart/form-data");\n            connection.setRequestProperty("Authorization", "Bearer " + token);\n\n            // Create the request body\n            OutputStream outputStream = connection.getOutputStream();\n            PrintWriter writer = new PrintWriter(new OutputStreamWriter(outputStream));\n            writer.append("--").append(getBoundary()).append("\\r\\n");\n            writer.append("Content-Disposition: form-data; name=\\"contacts\\"; filename=\\"").append(contactsFile.getName()).append("\\"\\r\\n");\n            writer.append("Content-Type: ").append(connection.guessContentTypeFromName(contactsFile.getName())).append("\\r\\n");\n            writer.append("\\r\\n");\n            writer.flush();\n\n            // Write file content to the request body\n            FileInputStream fileInputStream = new FileInputStream(contactsFile);\n            byte[] buffer = new byte[4096];\n            int bytesRead;\n            while ((bytesRead = fileInputStream.read(buffer)) != -1) {\n                outputStream.write(buffer, 0, bytesRead);\n            }\n            outputStream.flush();\n            fileInputStream.close();\n\n            // Write remaining request body\n            writer.append("\\r\\n");\n            writer.append("--").append(getBoundary()).append("\\r\\n");\n            writer.append("Content-Disposition: form-data; name=\\"sender_id\\"\\r\\n");\n            writer.append("\\r\\n").append(senderId).append("\\r\\n");\n            writer.append("--").append(getBoundary()).append("\\r\\n");\n            writer.append("Content-Disposition: form-data; name=\\"message\\"\\r\\n");\n            writer.append("\\r\\n").append(message).append("\\r\\n");\n            writer.append("--").append(getBoundary()).append("--").append("\\r\\n");\n            writer.close();\n\n            // Send the request and get the response\n            int responseCode = connection.getResponseCode();\n            BufferedReader reader = new BufferedReader(new InputStreamReader(connection.getInputStream()));\n            String line;\n            StringBuilder response = new StringBuilder();\n            while ((line = reader.readLine()) != null) {\n                response.append(line);\n            }\n            reader.close();\n\n            // Handle the response\n            if (responseCode == HttpURLConnection.HTTP_OK) {\n                System.out.println("File message sent successfully.");\n                // Perform necessary actions on success\n            } else {\n                System.out.println("Failed to send file message. Response code: " + responseCode);\n                // Handle error cases\n            }\n\n            connection.disconnect();\n        } catch (IOException e) {\n            e.printStackTrace();\n        }\n    }\n\n    private static String getBoundary() {\n        return "===" + System.currentTimeMillis() + "===";\n    }\n}\n\n')))))}f.isMDXComponent=!0}}]);