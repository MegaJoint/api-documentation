"use strict";(self.webpackChunkapi_documentation=self.webpackChunkapi_documentation||[]).push([[957],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(n),m=r,h=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(h,s(s({ref:t},u),{},{components:n})):a.createElement(h,s({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(7294),r=n(6010);const o={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:n,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,s),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>C});var a=n(7462),r=n(7294),o=n(6010),s=n(2466),i=n(6550),c=n(1980),l=n(7392),u=n(12);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,l.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=d(e),[s,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[c,l]=h({queryString:n,groupId:a}),[p,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),b=(()=>{const e=c??p;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{b&&i(b)}),[b]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),l(e),f(e)}),[l,f,o]),tabValues:o}}var b=n(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:n,selectedValue:i,selectValue:c,tabValues:l}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,s.o5)(),d=e=>{const t=e.currentTarget,n=u.indexOf(t),a=l[n].value;a!==i&&(p(t),c(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},l.map((e=>{let{value:t,label:n,attributes:s}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:d},s,{className:(0,o.Z)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":i===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function k(e){const t=f(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",g.tabList)},r.createElement(y,(0,a.Z)({},e,t)),r.createElement(v,(0,a.Z)({},e,t)))}function C(e){const t=(0,b.Z)();return r.createElement(k,(0,a.Z)({key:String(t)},e))}},3444:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905)),o=n(4866),s=n(5162);const i={sidebar_position:2},c="Edit contact",l={unversionedId:"Contacts/edit_contact",id:"Contacts/edit_contact",title:"Edit contact",description:"Assume we have created a function called saveContactChanges function is an asynchronous function that is used to update the changes made to a contact in the system. It makes a PUT request to the specified API endpoint (https://dev.hudumasms.com/api/contacts/update/) with the updated contact details.",source:"@site/docs/Contacts/edit_contact.md",sourceDirName:"Contacts",slug:"/Contacts/edit_contact",permalink:"/swa/docs/Contacts/edit_contact",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Contacts/edit_contact.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Create contact",permalink:"/swa/docs/Contacts/create_contact"},next:{title:"List contacts",permalink:"/swa/docs/Contacts/list_contacts"}},u={},p=[],d={toc:p},m="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"edit-contact"},"Edit contact"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"javascript",label:"Javascript",mdxType:"TabItem"},(0,r.kt)("p",null,"Assume we have created a function called ",(0,r.kt)("inlineCode",{parentName:"p"},"saveContactChanges")," function is an asynchronous function that is used to update the changes made to a contact in the system. It makes a PUT request to the specified API endpoint (",(0,r.kt)("inlineCode",{parentName:"p"},"https://dev.hudumasms.com/api/contacts/update/{contact_id}"),") with the updated contact details."),(0,r.kt)("p",null,"Here's a breakdown of the code inside the function:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"It  assigns contact ID  it to the ",(0,r.kt)("inlineCode",{parentName:"li"},"contact_id")," variable."),(0,r.kt)("li",{parentName:"ul"},"It uses the ",(0,r.kt)("inlineCode",{parentName:"li"},"fetch")," function to send a PUT request to the API endpoint."),(0,r.kt)("li",{parentName:"ul"},"The request body contains the updated contact information: ",(0,r.kt)("inlineCode",{parentName:"li"},"names"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),", and ",(0,r.kt)("inlineCode",{parentName:"li"},"email"),"."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"credentials")," option is set to ",(0,r.kt)("inlineCode",{parentName:"li"},"'include'")," to include any credentials such as cookies."),(0,r.kt)("li",{parentName:"ul"},"The headers include the necessary information: ",(0,r.kt)("inlineCode",{parentName:"li"},"Content-Type"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Accept"),", and ",(0,r.kt)("inlineCode",{parentName:"li"},"Authorization")," with the ",(0,r.kt)("inlineCode",{parentName:"li"},"Bearer")," token."),(0,r.kt)("li",{parentName:"ul"},"The response from the API is then parsed as JSON using ",(0,r.kt)("inlineCode",{parentName:"li"},"response.json()"),"."),(0,r.kt)("li",{parentName:"ul"},"If the response is successful (status code 200), a success message is logged to the console using ",(0,r.kt)("inlineCode",{parentName:"li"},"console.log"),"."),(0,r.kt)("li",{parentName:"ul"},"If the response is not successful, an error message or any relevant error handling is performed.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"\nconst saveContactChanges = async () => {\n  try {\n    const  id = 3\n    const response = await fetch('https://dev.hudumasms.com/api/contacts/update/' + contact_id, {\n      method: 'PUT',\n      body: JSON.stringify({\n        names: 'Joseph',\n        number: 255766294723,\n        email: 'test@mail.com'\n      }),\n      credentials: 'include',\n      headers: {\n        'Content-Type': 'application/json',\n        'Accept': 'application/json',\n        'Authorization': `Bearer ${token}`\n      },\n    });\n\n    const json = await response.json()\n    if (response.ok) {\n      console.log('Contact changes saved successfully')\n    }\n\n    if (!response.ok) {\n      console.log(json.message)\n    }\n  } catch (err) {\n    console.log('Error occurred while saving contact changes')\n  }\n}\n"))),(0,r.kt)(s.Z,{value:"php",label:"PHP",mdxType:"TabItem"},"Here's a PHP version of the code built-in `file_get_contents` function to send an HTTP PUT request:",(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"function saveContactChanges() {\n  // Code for saving contact changes\n\n  // API endpoint URL\n  $url = 'https://dev.hudumasms.com/api/contacts/update/' . $contact_id;\n\n  // Request data\n  $data = array(\n    'names' => $name,\n    'number' => (int)$phone,\n    'email' => $email\n  );\n\n  // Request headers\n  $headers = array(\n    'Content-Type: application/json',\n    'Accept: application/json',\n    'Authorization: Bearer ' . $token\n  );\n\n  // Set the PUT request options\n  $options = array(\n    'http' => array(\n      'header' => implode(\"\\r\\n\", $headers),\n      'method' => 'PUT',\n      'content' => json_encode($data),\n      'ignore_errors' => true\n    )\n  );\n\n  // Create the stream context\n  $context = stream_context_create($options);\n\n  // Send the PUT request and get the response\n  $response = file_get_contents($url, false, $context);\n\n  // Handle the response\n  if ($response === false) {\n    // Handle error\n    echo 'Error: Failed to send the request';\n  } else {\n    // Process the response\n    $json = json_decode($response, true);\n    if ($json && isset($json['success'])) {\n      if ($json['success']) {\n        // Handle successful update\n        echo 'Contact changes saved successfully';\n      } else {\n        // Handle unsuccessful update\n        echo 'Error: ' . $json['message'];\n      }\n    } else {\n      // Handle response parsing error\n      echo 'Error parsing API response';\n    }\n  }\n}\n")),(0,r.kt)("p",null,"Please make sure you have the necessary variables available (",(0,r.kt)("inlineCode",{parentName:"p"},"$contact_id"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"$name"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"$phone"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"$email"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"$token"),") before calling the ",(0,r.kt)("inlineCode",{parentName:"p"},"saveContactChanges()")," function. This code constructs the PUT request by setting the necessary headers and request body. It then uses ",(0,r.kt)("inlineCode",{parentName:"p"},"file_get_contents")," with a stream context to send the PUT request and retrieve the response."),(0,r.kt)("p",null,"Note that you may need to enable the ",(0,r.kt)("inlineCode",{parentName:"p"},"allow_url_fopen")," configuration option in your PHP settings for the ",(0,r.kt)("inlineCode",{parentName:"p"},"file_get_contents")," function to work with remote URLs.")),(0,r.kt)(s.Z,{value:"java",label:"Java",mdxType:"TabItem"},"Here's a version of the code using Java's `HttpURLConnection` to send an HTTP PUT request:",(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'\nimport java.io.BufferedReader;\nimport java.io.IOException;\nimport java.io.InputStreamReader;\nimport java.io.OutputStream;\nimport java.net.HttpURLConnection;\nimport java.net.URL;\n\npublic class ContactUpdater {\n    public static void saveContactChanges() {\n        try {\n            // API endpoint URL\n            String apiUrl = "https://dev.hudumasms.com/api/contacts/update/" + contactId;\n\n            // Request data\n            String requestData = "{\\"names\\":\\"" + name + "\\",\\"number\\":" + phone + ",\\"email\\":\\"" + email + "\\"}";\n\n            // Create the HttpURLConnection\n            URL url = new URL(apiUrl);\n            HttpURLConnection conn = (HttpURLConnection) url.openConnection();\n\n            // Set the request method to PUT\n            conn.setRequestMethod("PUT");\n\n            // Set the request headers\n            conn.setRequestProperty("Content-Type", "application/json");\n            conn.setRequestProperty("Accept", "application/json");\n            conn.setRequestProperty("Authorization", "Bearer " + token);\n\n            // Enable output and set the request body\n            conn.setDoOutput(true);\n            try (OutputStream outputStream = conn.getOutputStream()) {\n                outputStream.write(requestData.getBytes());\n                outputStream.flush();\n            }\n\n            // Get the response code\n            int responseCode = conn.getResponseCode();\n\n            if (responseCode == HttpURLConnection.HTTP_OK) {\n                // Read the response\n                try (BufferedReader reader = new BufferedReader(new InputStreamReader(conn.getInputStream()))) {\n                    String line;\n                    StringBuilder response = new StringBuilder();\n                    while ((line = reader.readLine()) != null) {\n                        response.append(line);\n                    }\n                    // Handle successful update\n                    System.out.println("Contact changes saved successfully");\n                }\n            } else {\n                // Read the error response\n                try (BufferedReader reader = new BufferedReader(new InputStreamReader(conn.getErrorStream()))) {\n                    String line;\n                    StringBuilder errorResponse = new StringBuilder();\n                    while ((line = reader.readLine()) != null) {\n                        errorResponse.append(line);\n                    }\n                    // Handle unsuccessful update\n                    System.out.println("Error: " + errorResponse.toString());\n                }\n            }\n\n            // Close the connection\n            conn.disconnect();\n        } catch (IOException e) {\n            e.printStackTrace();\n            // Handle exception\n            System.out.println("Error while saving contact changes");\n        }\n    }\n}\n')),(0,r.kt)("p",null,"Please ensure that you have the necessary variables available (",(0,r.kt)("inlineCode",{parentName:"p"},"contactId"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"name"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"phone"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"email"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"token"),") before calling the ",(0,r.kt)("inlineCode",{parentName:"p"},"saveContactChanges()")," method. This code constructs the PUT request by setting the necessary headers and request body. It then uses ",(0,r.kt)("inlineCode",{parentName:"p"},"HttpURLConnection")," to send the PUT request and retrieve the response. The response is read and processed accordingly based on the HTTP status code."),(0,r.kt)("p",null,"Note: This code snippet provides a basic framework for making an HTTP PUT request. You may need to customize it further based on your specific requirements and the libraries or frameworks you are using in your Java project."))))}h.isMDXComponent=!0}}]);