(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{404:function(t,a,s){"use strict";s.r(a);var e=s(44),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"graphql-schema"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#graphql-schema"}},[t._v("#")]),t._v(" GraphQL Schema")]),t._v(" "),s("h2",{attrs:{id:"defining-entities"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#defining-entities"}},[t._v("#")]),t._v(" Defining Entities")]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("schema.graphql")]),t._v(" file defines the various GraphQL schemas. Due to the way that the GraphQL query language works, the schema file essentially dictates the shape of your data from SubQuery.\nTo learn more about how to write in GraphQL schema language, we recommend checking out "),s("a",{attrs:{href:"https://graphql.org/learn/schema/#type-language",target:"_blank",rel:"noopener noreferrer"}},[t._v("Schemas and Types"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("p",[s("strong",[t._v("Important: When you make any changes to the schema file, please ensure that you regenerate your types directory with the following command "),s("code",[t._v("yarn codegen")])])]),t._v(" "),s("h3",{attrs:{id:"entites"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#entites"}},[t._v("#")]),t._v(" Entites")]),t._v(" "),s("p",[t._v("Each entity must define its required fields "),s("code",[t._v("id")]),t._v(" with the type of "),s("code",[t._v("ID!")]),t._v(". It is used as the primary key and unique among all entities of the same type.")]),t._v(" "),s("p",[t._v("Non-nullable fields in the entity are indicated by "),s("code",[t._v("!")]),t._v(". Please see the example below:")]),t._v(" "),s("div",{staticClass:"language-graphql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-graphql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Example")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token directive function"}},[t._v("@entity")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ID"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# id field is always required and must look like this")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" String"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# This is a required field")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("address")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" String "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# This is an optional field")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"supported-scalars-and-types"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#supported-scalars-and-types"}},[t._v("#")]),t._v(" Supported scalars and types")]),t._v(" "),s("p",[t._v("We currently supporting flowing scalars types:")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("ID")])]),t._v(" "),s("li",[s("code",[t._v("Int")])]),t._v(" "),s("li",[s("code",[t._v("String")])]),t._v(" "),s("li",[s("code",[t._v("BigInt")])]),t._v(" "),s("li",[s("code",[t._v("Date")])]),t._v(" "),s("li",[s("code",[t._v("Boolean")])]),t._v(" "),s("li",[s("code",[t._v("<EntityName>")]),t._v(" for nested relationship entities, you might use the defined entity's name as one of the fields. Please see in "),s("a",{attrs:{href:"#entity-relationships"}},[t._v("Entity Relationships")]),t._v(".")]),t._v(" "),s("li",[s("code",[t._v("JSON")]),t._v(" can alternatively store structured data, please see "),s("a",{attrs:{href:"#json-type"}},[t._v("JSON type")])])]),t._v(" "),s("h2",{attrs:{id:"indexing-by-non-primary-key-field"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#indexing-by-non-primary-key-field"}},[t._v("#")]),t._v(" Indexing by non-primary-key field")]),t._v(" "),s("p",[t._v("To improve query performance, index an entity field simply by implementing the "),s("code",[t._v("@index")]),t._v(" annotation on a non-primary-key field.")]),t._v(" "),s("p",[t._v("However, we don't allow users to add "),s("code",[t._v("@index")]),t._v(" annotation on any "),s("a",{attrs:{href:"#json-type"}},[t._v("JSON")]),t._v(" object. By default, indexes are automatically added to foreign keys and for JSON fields in the database, but only to enhance query service performance.")]),t._v(" "),s("p",[t._v("Here is an example.")]),t._v(" "),s("div",{staticClass:"language-graphql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-graphql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("User")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token directive function"}},[t._v("@entity")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ID"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" String"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token directive function"}},[t._v("@index")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("unique")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# unique can be set to true or false")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("title")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Title"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Indexes are automatically added to foreign key field ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Title")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token directive function"}},[t._v("@entity")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ID"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("  \n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" String"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token directive function"}},[t._v("@index")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("unique")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("Assuming we knew this user's name, but we don't know the exact id value, rather than extract all users and then filtering by name we can add "),s("code",[t._v("@index")]),t._v(" behind the name field. This makes querying much faster and we can additionally pass the "),s("code",[t._v("unique: true")]),t._v(" to  ensure uniqueness.")]),t._v(" "),s("p",[s("strong",[t._v("If a field is not unique, the maximum result set size is 100")])]),t._v(" "),s("p",[t._v("When code generation is run, this will automatically create a "),s("code",[t._v("getByName")]),t._v(" under the "),s("code",[t._v("User")]),t._v(" model, and the foreign key field "),s("code",[t._v("title")]),t._v(" will create a "),s("code",[t._v("getByTitleId")]),t._v(" method,\nwhich both can directly be accessed in the mapping function.")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Prepare a record for title entity */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INSERT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INTO")]),t._v(" titles "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VALUES")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'id_1'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Captain'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("div",{staticClass:"language-typescript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Handler in mapping function")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("User"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"../types/models/User"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("Title"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"../types/models/Title"')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" jack "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" User"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getByName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Jack Sparrow'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" captainTitle "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" Title"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getByName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Captain'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" pirateLords "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" User"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getByTitleId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("captainTitle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// List of all Captains")]),t._v("\n")])])]),s("h2",{attrs:{id:"entity-relationships"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#entity-relationships"}},[t._v("#")]),t._v(" Entity Relationships")]),t._v(" "),s("p",[t._v("An entity often has nested relationships with other entities. Setting the field value to another entity name will define a one-to-one relationship between these two entities by default.")]),t._v(" "),s("p",[t._v("Different entity relationships (one-to-one, one-to-many, and many-to-many) can be configured using the examples below.")]),t._v(" "),s("h3",{attrs:{id:"one-to-one-relationships"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#one-to-one-relationships"}},[t._v("#")]),t._v(" One-to-One Relationships")]),t._v(" "),s("p",[t._v("One-to-one relationships are the default when only a single entity is mapped to another.")]),t._v(" "),s("p",[t._v("Example: A passport will only belong to one person and a person only has one passport (in this example):")]),t._v(" "),s("div",{staticClass:"language-graphql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-graphql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token directive function"}},[t._v("@entity")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ID"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Passport")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token directive function"}},[t._v("@entity")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ID"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("owner")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Person"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("or")]),t._v(" "),s("div",{staticClass:"language-graphql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-graphql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token directive function"}},[t._v("@entity")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ID"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("passport")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Passport"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Passport")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token directive function"}},[t._v("@entity")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ID"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("owner")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Person"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"one-to-many-relationships"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#one-to-many-relationships"}},[t._v("#")]),t._v(" One-to-Many relationships")]),t._v(" "),s("p",[t._v("You can use square brackets to indicate that a field type includes multiple entities.")]),t._v(" "),s("p",[t._v("Example: A person can have multiple accounts.")]),t._v(" "),s("div",{staticClass:"language-graphql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-graphql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token directive function"}},[t._v("@entity")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ID"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("accounts")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Account"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Account")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token directive function"}},[t._v("@entity")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ID"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("publicAddress")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" String"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"many-to-many-relationships"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#many-to-many-relationships"}},[t._v("#")]),t._v(" Many-to-Many relationships")]),t._v(" "),s("p",[t._v("A many-to-many relationship can be achieved by implementing a mapping entity to connect the other two entities.")]),t._v(" "),s("p",[t._v("Example: Each person is a part of multiple groups (PersonGroup) and groups have multiple different people (PersonGroup).")]),t._v(" "),s("div",{staticClass:"language-graphql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-graphql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token directive function"}},[t._v("@entity")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ID"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" String"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("groups")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("PersonGroup"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PersonGroup")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token directive function"}},[t._v("@entity")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ID"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("person")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Person"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("Group")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Group"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Group")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token directive function"}},[t._v("@entity")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ID"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" String"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("persons")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("PersonGroup"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("Also, it is possible to create a connection of the same entity in multiple fields of the middle entity.")]),t._v(" "),s("p",[t._v("For example, an account can have multiple transfers, and each transfer has a source and destination account.")]),t._v(" "),s("p",[t._v("This will establish a bi-directional relationship between two Accounts (from and to) through Transfer table.")]),t._v(" "),s("div",{staticClass:"language-graphql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-graphql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Account")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token directive function"}},[t._v("@entity")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ID"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("publicAddress")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" String"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Transfer")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token directive function"}},[t._v("@entity")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ID"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("amount")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" BigInt\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("from")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Account"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("to")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Account"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"reverse-lookups"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#reverse-lookups"}},[t._v("#")]),t._v(" Reverse Lookups")]),t._v(" "),s("p",[t._v("To enable a reverse lookup on an entity to a relation, attach "),s("code",[t._v("@derivedFrom")]),t._v(" to the field and point to its reverse lookup field of another entity.")]),t._v(" "),s("p",[t._v("This creates a virtual field on the entity that can be queried.")]),t._v(" "),s("p",[t._v('The Transfer "from" an Account is accessible from the Account entity by setting the sentTransfer or receivedTransfer as having their value derived from the respective from or to fields.')]),t._v(" "),s("div",{staticClass:"language-graphql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-graphql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Account")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token directive function"}},[t._v("@entity")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ID"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("publicAddress")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" String"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("sentTransfers")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Transfer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token directive function"}},[t._v("@derivedFrom")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("field")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"from"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("receivedTransfers")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Transfer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token directive function"}},[t._v("@derivedFrom")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("field")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"to"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Transfer")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token directive function"}},[t._v("@entity")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ID"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("amount")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" BigInt\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("from")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Account"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("to")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Account"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"json-type"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#json-type"}},[t._v("#")]),t._v(" JSON type")]),t._v(" "),s("p",[t._v("We are supporting saving data as a JSON type, which is a fast way to store structured data. We'll automatically generate corresponding JSON interfaces for querying this data and save you time defining and managing entities.")]),t._v(" "),s("p",[t._v("We recommend users use the JSON type in the following scenarios:")]),t._v(" "),s("ul",[s("li",[t._v("When storing structured data in a single field is more manageable than creating multiple separate entities.")]),t._v(" "),s("li",[t._v("Saving arbitrary key/value user preferences (where the value can be boolean, textual, or numeric, and you don't want to have separate columns for different data types)")]),t._v(" "),s("li",[t._v("The schema is volatile and changes frequently")])]),t._v(" "),s("h3",{attrs:{id:"define-json-directive"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#define-json-directive"}},[t._v("#")]),t._v(" Define JSON directive")]),t._v(" "),s("p",[t._v("Define the property as a JSON type by adding the "),s("code",[t._v("jsonField")]),t._v(" annotation in the entity. This will automatically generate interfaces for all JSON objects in your project under "),s("code",[t._v("types/interfaces.ts")]),t._v(", and you can access them in your mapping function.")]),t._v(" "),s("p",[t._v("Unlike the entity, the jsonField directive object does not require any "),s("code",[t._v("id")]),t._v(" field.\nA JSON object is also able to nest with other JSON objects.")]),t._v(" "),s("div",{staticClass:"language-graphql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-graphql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AddressDetail")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token directive function"}},[t._v("@jsonField")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("street")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" String"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("district")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" String"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ContactCard")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token directive function"}},[t._v("@jsonField")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("phone")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" String"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("address")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" AddressDetail "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Nested JSON")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("User")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token directive function"}},[t._v("@entity")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ID"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v(" \n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("contact")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ContactCard"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Store a list of JSON objects")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"querying-json-fields"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#querying-json-fields"}},[t._v("#")]),t._v(" Querying JSON fields")]),t._v(" "),s("p",[t._v("The drawback of using JSON types is a slight impact on query efficiency when filtering, as each time it performs a text search, it is on the entire entity.")]),t._v(" "),s("p",[t._v("However, the impact is still acceptable in our query service. Here is an example of how to use the "),s("code",[t._v("contains")]),t._v(" operator in the GraphQL query on a JSON field to find the first 5 users who own a phone number that contains '0064'.")]),t._v(" "),s("div",{staticClass:"language-graphql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-graphql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#To find the the first 5 users own phone numbers contains '0064'.")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("query")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  user"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("first")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("filter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("contactCard")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("contains")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("phone")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0064"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    nodes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      id\n      contactCard\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);