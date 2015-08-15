var searchIndex = {};
searchIndex['xmltree'] = {"items":[[0,"","xmltree","A simple library for parsing an XML file into an in-memory tree structure",null,null],[3,"Element","","",null,null],[12,"name","","The name of the Element.  Does not include any namespace info",0,null],[12,"attributes","","The Element attributes",0,null],[12,"children","","Children",0,null],[12,"text","","The text data for this element",0,null],[5,"parse","","Parses a file into an Element",null,{"inputs":[{"name":"p"}],"output":{"name":"element"}}],[11,"fmt","","",0,{"inputs":[{"name":"element"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"get_child","","Attempts to find a child element with the given name",0,{"inputs":[{"name":"element"},{"name":"k"}],"output":{"name":"option"}}]],"paths":[[3,"Element"]]};
searchIndex['xml'] = {"items":[[0,"","xml","This crate currently provides almost XML 1.0/1.1-compliant pull parser.",null,null],[0,"macros","","Contains several macros used in this crate.",null,null],[0,"name","","",null,null],[3,"Name","xml::name","Represents a qualified XML name.",null,null],[12,"local_name","","A local name, e.g. `string` in `xsi:string`.",0,null],[12,"namespace","","A namespace URI, e.g. `http://www.w3.org/2000/xmlns/`.",0,null],[12,"prefix","","A name prefix, e.g. `xsi` in `xsi:string`.",0,null],[3,"OwnedName","","An owned variant of `Name`.",null,null],[12,"local_name","","A local name, e.g. `string` in `xsi:string`.",1,null],[12,"namespace","","A namespace URI, e.g. `http://www.w3.org/2000/xmlns/`.",1,null],[12,"prefix","","A name prefix, e.g. `xsi` in `xsi:string`.",1,null],[11,"fmt","","",0,{"inputs":[{"name":"name"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"hash","","",0,null],[11,"eq","","",0,{"inputs":[{"name":"name"},{"name":"name"}],"output":{"name":"bool"}}],[11,"ne","","",0,{"inputs":[{"name":"name"},{"name":"name"}],"output":{"name":"bool"}}],[11,"clone","","",0,{"inputs":[{"name":"name"}],"output":{"name":"name"}}],[11,"fmt","","",0,{"inputs":[{"name":"name"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"to_owned","","Returns an owned variant of the qualified name.",0,{"inputs":[{"name":"name"}],"output":{"name":"ownedname"}}],[11,"local","","Returns a new `Name` instance representing plain local name.",0,{"inputs":[{"name":"name"},{"name":"str"}],"output":{"name":"name"}}],[11,"qualified","","Returns a new `Name` instance representing a qualified name with or without a prefix and\nwith a namespace URI.",0,{"inputs":[{"name":"name"},{"name":"str"},{"name":"str"},{"name":"option"}],"output":{"name":"name"}}],[11,"to_repr","","Returns correct XML representation of this local name and prefix.",0,{"inputs":[{"name":"name"}],"output":{"name":"string"}}],[11,"fmt","","",1,{"inputs":[{"name":"ownedname"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"hash","","",1,null],[11,"eq","","",1,{"inputs":[{"name":"ownedname"},{"name":"ownedname"}],"output":{"name":"bool"}}],[11,"ne","","",1,{"inputs":[{"name":"ownedname"},{"name":"ownedname"}],"output":{"name":"bool"}}],[11,"clone","","",1,{"inputs":[{"name":"ownedname"}],"output":{"name":"ownedname"}}],[11,"fmt","","",1,{"inputs":[{"name":"ownedname"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"borrow","","Constructs a borrowed `Name` based on this owned name.",1,{"inputs":[{"name":"ownedname"}],"output":{"name":"name"}}],[11,"local","","Returns a new `OwnedName` instance representing a plain local name.",1,{"inputs":[{"name":"ownedname"},{"name":"s"}],"output":{"name":"ownedname"}}],[11,"qualified","","Returns a new `OwnedName` instance representing a qualified name with or without\na prefix and with a namespace URI.",1,{"inputs":[{"name":"ownedname"},{"name":"s1"},{"name":"s2"},{"name":"option"}],"output":{"name":"ownedname"}}],[11,"prefix_as_ref","","Returns an optional prefix by reference, equivalent to `self.borrow().prefix`\nbut avoids extra work.",1,{"inputs":[{"name":"ownedname"}],"output":{"name":"option"}}],[11,"namespace_as_ref","","Returns an optional namespace by reference, equivalen to `self.borrow().namespace`\nbut avoids extra work.",1,{"inputs":[{"name":"ownedname"}],"output":{"name":"option"}}],[11,"to_repr","","See `Name::to_repr()` for details.",1,{"inputs":[{"name":"ownedname"}],"output":{"name":"string"}}],[11,"from_str","","Parses the given string slice into a qualified name.",1,{"inputs":[{"name":"ownedname"},{"name":"str"}],"output":{"name":"result"}}],[0,"attribute","xml","",null,null],[3,"Attribute","xml::attribute","A borrowed version of an XML attribute.",null,null],[12,"name","","Attribute name.",2,null],[12,"value","","Attribute value.",2,null],[3,"OwnedAttribute","","",null,null],[12,"name","","",3,null],[12,"value","","",3,null],[11,"fmt","","",2,{"inputs":[{"name":"attribute"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"hash","","",2,null],[11,"eq","","",2,{"inputs":[{"name":"attribute"},{"name":"attribute"}],"output":{"name":"bool"}}],[11,"ne","","",2,{"inputs":[{"name":"attribute"},{"name":"attribute"}],"output":{"name":"bool"}}],[11,"clone","","",2,{"inputs":[{"name":"attribute"}],"output":{"name":"attribute"}}],[11,"fmt","","",2,{"inputs":[{"name":"attribute"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"to_owned","","",2,{"inputs":[{"name":"attribute"}],"output":{"name":"ownedattribute"}}],[11,"new","","",2,{"inputs":[{"name":"attribute"},{"name":"name"},{"name":"str"}],"output":{"name":"attribute"}}],[11,"fmt","","",3,{"inputs":[{"name":"ownedattribute"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"hash","","",3,null],[11,"eq","","",3,{"inputs":[{"name":"ownedattribute"},{"name":"ownedattribute"}],"output":{"name":"bool"}}],[11,"ne","","",3,{"inputs":[{"name":"ownedattribute"},{"name":"ownedattribute"}],"output":{"name":"bool"}}],[11,"clone","","",3,{"inputs":[{"name":"ownedattribute"}],"output":{"name":"ownedattribute"}}],[11,"borrow","","",3,{"inputs":[{"name":"ownedattribute"}],"output":{"name":"attribute"}}],[11,"new","","",3,{"inputs":[{"name":"ownedattribute"},{"name":"ownedname"},{"name":"string"}],"output":{"name":"ownedattribute"}}],[11,"fmt","","",3,{"inputs":[{"name":"ownedattribute"},{"name":"formatter"}],"output":{"name":"result"}}],[0,"common","xml","Contains several types used throughout the library.",null,null],[3,"TextPosition","xml::common","Represents a position inside some textual document.",null,null],[12,"row","","Row, counting from 0",4,null],[12,"column","","Column, counting from 0",4,null],[3,"Error","","XML parsing error.",null,null],[4,"XmlVersion","","XML version enumeration.",null,null],[13,"Version10","","XML version 1.0.",5,null],[13,"Version11","","XML version 1.1.",5,null],[5,"is_whitespace_char","","Checks whether the given character is a white space character (`S`)\nas is defined by XML 1.1 specification, [section 2.3][1].",null,{"inputs":[{"name":"char"}],"output":{"name":"bool"}}],[5,"is_name_start_char","","Checks whether the given character is a name start character (`NameStartChar`)\nas is defined by XML 1.1 specification, [section 2.3][1].",null,{"inputs":[{"name":"char"}],"output":{"name":"bool"}}],[5,"is_name_char","","Checks whether the given character is a name character (`NameChar`)\nas is defined by XML 1.1 specification, [section 2.3][1].",null,{"inputs":[{"name":"char"}],"output":{"name":"bool"}}],[8,"Position","","Get the position in the document corresponding to the object",null,null],[10,"position","","Returns the current position or a position corresponding to the object.",6,{"inputs":[{"name":"position"}],"output":{"name":"textposition"}}],[11,"eq","","",4,{"inputs":[{"name":"textposition"},{"name":"textposition"}],"output":{"name":"bool"}}],[11,"ne","","",4,{"inputs":[{"name":"textposition"},{"name":"textposition"}],"output":{"name":"bool"}}],[11,"clone","","",4,{"inputs":[{"name":"textposition"}],"output":{"name":"textposition"}}],[11,"new","","Creates a new position initialized to the beginning of the document",4,{"inputs":[{"name":"textposition"}],"output":{"name":"textposition"}}],[11,"advance","","Advances the position in a line",4,{"inputs":[{"name":"textposition"},{"name":"u8"}],"output":null}],[11,"advance_to_tab","","Advances the position in a line to the next tab position",4,{"inputs":[{"name":"textposition"},{"name":"u8"}],"output":null}],[11,"new_line","","Advances the position to the beginning of the next line",4,{"inputs":[{"name":"textposition"}],"output":null}],[11,"fmt","","",4,{"inputs":[{"name":"textposition"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",4,{"inputs":[{"name":"textposition"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"position","","",4,{"inputs":[{"name":"textposition"}],"output":{"name":"textposition"}}],[11,"fmt","","",7,{"inputs":[{"name":"error"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",7,{"inputs":[{"name":"error"},{"name":"error"}],"output":{"name":"bool"}}],[11,"ne","","",7,{"inputs":[{"name":"error"},{"name":"error"}],"output":{"name":"bool"}}],[11,"clone","","",7,{"inputs":[{"name":"error"}],"output":{"name":"error"}}],[11,"fmt","","",7,{"inputs":[{"name":"error"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"position","","",7,{"inputs":[{"name":"error"}],"output":{"name":"textposition"}}],[11,"new","","Creates a new error using position information from the provided\n`Position` object and a message.",7,{"inputs":[{"name":"error"},{"name":"o"},{"name":"string"}],"output":{"name":"error"}}],[11,"msg","","Returns a reference to a message which is contained inside this error.",7,{"inputs":[{"name":"error"}],"output":{"name":"str"}}],[11,"description","","",7,{"inputs":[{"name":"error"}],"output":{"name":"str"}}],[11,"eq","","",5,{"inputs":[{"name":"xmlversion"},{"name":"xmlversion"}],"output":{"name":"bool"}}],[11,"ne","","",5,{"inputs":[{"name":"xmlversion"},{"name":"xmlversion"}],"output":{"name":"bool"}}],[11,"clone","","",5,{"inputs":[{"name":"xmlversion"}],"output":{"name":"xmlversion"}}],[11,"fmt","","",5,{"inputs":[{"name":"xmlversion"},{"name":"formatter"}],"output":{"name":"result"}}],[0,"escape","xml","",null,null],[5,"escape_str","xml::escape","Performs escaping of common XML characters.",null,{"inputs":[{"name":"str"}],"output":{"name":"cow"}}],[0,"namespace","xml","",null,null],[3,"Namespace","xml::namespace","Namespace is a map from prefixes to namespace URIs.",null,null],[3,"NamespaceMappings","","An iterator over mappings from prefixes to URIs in a namespace.",null,null],[3,"NamespaceStack","","Namespace stack is a sequence of namespaces.",null,null],[3,"NamespaceStackMappings","","An iterator over mappings from prefixes to URIs in a namespace stack.",null,null],[6,"UriMapping","","",null,null],[17,"NS_XMLNS_PREFIX","","",null,null],[17,"NS_XMLNS_URI","","",null,null],[17,"NS_XML_PREFIX","","",null,null],[17,"NS_XML_URI","","",null,null],[17,"NS_EMPTY_URI","","",null,null],[8,"NamespaceIterable","","Denotes something which contains namespace URI mappings.",null,null],[16,"Iter","","",8,null],[10,"uri_mappings","","",8,{"inputs":[{"name":"namespaceiterable"}],"output":{"name":"iter"}}],[11,"clone","","",9,{"inputs":[{"name":"namespace"}],"output":{"name":"namespace"}}],[11,"eq","","",9,{"inputs":[{"name":"namespace"},{"name":"namespace"}],"output":{"name":"bool"}}],[11,"ne","","",9,{"inputs":[{"name":"namespace"},{"name":"namespace"}],"output":{"name":"bool"}}],[11,"empty","","Returns an empty namespace.",9,{"inputs":[{"name":"namespace"}],"output":{"name":"namespace"}}],[11,"is_empty","","Checks whether this namespace is empty.",9,{"inputs":[{"name":"namespace"}],"output":{"name":"bool"}}],[11,"is_essentially_empty","","Checks whether this namespace is essentially empty, that is, it does not contain\nanything but the default mappings.",9,{"inputs":[{"name":"namespace"}],"output":{"name":"bool"}}],[11,"put","","Puts a mapping into this namespace.",9,{"inputs":[{"name":"namespace"},{"name":"option"},{"name":"s2"}],"output":{"name":"bool"}}],[11,"force_put","","Puts a mapping into this namespace forcefully.",9,{"inputs":[{"name":"namespace"},{"name":"option"},{"name":"s2"}],"output":{"name":"option"}}],[11,"get","","Queries the namespace for the given prefix.",9,{"inputs":[{"name":"namespace"},{"name":"option"}],"output":{"name":"option"}}],[11,"next","","",10,{"inputs":[{"name":"namespacemappings"}],"output":{"name":"option"}}],[11,"uri_mappings","","",9,{"inputs":[{"name":"namespace"}],"output":{"name":"namespacemappings"}}],[11,"eq","","",11,{"inputs":[{"name":"namespacestack"},{"name":"namespacestack"}],"output":{"name":"bool"}}],[11,"ne","","",11,{"inputs":[{"name":"namespacestack"},{"name":"namespacestack"}],"output":{"name":"bool"}}],[11,"clone","","",11,{"inputs":[{"name":"namespacestack"}],"output":{"name":"namespacestack"}}],[11,"empty","","Returns an empty namespace stack.",11,{"inputs":[{"name":"namespacestack"}],"output":{"name":"namespacestack"}}],[11,"default","","Returns a namespace stack with default items in it.",11,{"inputs":[{"name":"namespacestack"}],"output":{"name":"namespacestack"}}],[11,"push_empty","","Adds an empty namespace to the top of this stack.",11,{"inputs":[{"name":"namespacestack"}],"output":null}],[11,"pop","","Removes a namespace at the top of the stack.",11,{"inputs":[{"name":"namespacestack"}],"output":{"name":"namespace"}}],[11,"peek","","Returns a namespace at the top of the stack, leaving the stack intact.",11,{"inputs":[{"name":"namespacestack"}],"output":{"name":"namespace"}}],[11,"put","","Puts a mapping into the topmost namespace in this stack.",11,{"inputs":[{"name":"namespacestack"},{"name":"option"},{"name":"string"}],"output":{"name":"bool"}}],[11,"get","","Performs a search for the given prefix in the whole stack.",11,{"inputs":[{"name":"namespacestack"},{"name":"option"}],"output":{"name":"option"}}],[11,"squash","","Combines this stack of namespaces into a single namespace.",11,{"inputs":[{"name":"namespacestack"}],"output":{"name":"namespace"}}],[11,"next","","",12,{"inputs":[{"name":"namespacestackmappings"}],"output":{"name":"option"}}],[11,"uri_mappings","","",11,{"inputs":[{"name":"namespacestack"}],"output":{"name":"namespacestackmappings"}}],[0,"reader","xml","Contains high-level interface for a pull-based XML parser.",null,null],[3,"EventReader","xml::reader","Simple wrapper around an `std::io::BufReader` which provides pull-based XML parsing.",null,null],[3,"Events","","XML events iterator, created by `events()` method on `Parser`.",null,null],[0,"config","","Contains parser configuration structure.",null,null],[3,"ParserConfig","xml::reader::config","Parser configuration structure.",null,null],[12,"trim_whitespace","","Whether or not should whitespace be removed. Default is false.",13,null],[12,"whitespace_to_characters","","Whether or not should whitespace be converted to characters.\nDefault is false.",13,null],[12,"cdata_to_characters","","Whether or not should CDATA be converted to characters.\nDefault is false.",13,null],[12,"ignore_comments","","Whether or not should comments be omitted. Default is true.",13,null],[12,"coalesce_characters","","Whether or not should sequential `Characters` events be merged.\nDefault is true.",13,null],[11,"new","","Returns a new config with default values.",13,{"inputs":[{"name":"parserconfig"}],"output":{"name":"parserconfig"}}],[11,"trim_whitespace","","Sets the field to the provided value and returns updated config object.",13,{"inputs":[{"name":"parserconfig"},{"name":"bool"}],"output":{"name":"parserconfig"}}],[11,"whitespace_to_characters","","Sets the field to the provided value and returns updated config object.",13,{"inputs":[{"name":"parserconfig"},{"name":"bool"}],"output":{"name":"parserconfig"}}],[11,"cdata_to_characters","","Sets the field to the provided value and returns updated config object.",13,{"inputs":[{"name":"parserconfig"},{"name":"bool"}],"output":{"name":"parserconfig"}}],[11,"ignore_comments","","Sets the field to the provided value and returns updated config object.",13,{"inputs":[{"name":"parserconfig"},{"name":"bool"}],"output":{"name":"parserconfig"}}],[11,"coalesce_characters","","Sets the field to the provided value and returns updated config object.",13,{"inputs":[{"name":"parserconfig"},{"name":"bool"}],"output":{"name":"parserconfig"}}],[0,"events","xml::reader","Contains `XmlEvent` datatype, instances of which are emitted by the parser.",null,null],[4,"XmlEvent","xml::reader::events","An element of an XML input stream.",null,null],[13,"StartDocument","","Corresponds to XML document declaration.",14,null],[12,"version","xml::reader::events::XmlEvent","XML version.",14,null],[12,"encoding","","XML document encoding.",14,null],[12,"standalone","","XML standalone declaration.",14,null],[13,"EndDocument","xml::reader::events","Denotes to the end of the document stream.",14,null],[13,"ProcessingInstruction","","Denotes an XML processing instruction.",14,null],[12,"name","xml::reader::events::XmlEvent","Processing instruction target.",14,null],[12,"data","","Processing instruction content.",14,null],[13,"StartElement","xml::reader::events","Denotes a beginning of an XML element.",14,null],[12,"name","xml::reader::events::XmlEvent","Qualified name of the element.",14,null],[12,"attributes","","A list of attributes associated with the element.",14,null],[12,"namespace","","Contents of the namespace mapping at this point of the document.",14,null],[13,"EndElement","xml::reader::events","Denotes an end of an XML document.",14,null],[12,"name","xml::reader::events::XmlEvent","Qualified name of the element.",14,null],[13,"CData","xml::reader::events","Denotes CDATA content.",14,null],[13,"Comment","","Denotes a comment.",14,null],[13,"Characters","","Denotes character data outside of tags.",14,null],[13,"Whitespace","","Denotes a chunk of whitespace outside of tags.",14,null],[13,"Error","","Denotes parsing error.",14,null],[11,"clone","","",14,{"inputs":[{"name":"xmlevent"}],"output":{"name":"xmlevent"}}],[11,"eq","","",14,{"inputs":[{"name":"xmlevent"},{"name":"xmlevent"}],"output":{"name":"bool"}}],[11,"ne","","",14,{"inputs":[{"name":"xmlevent"},{"name":"xmlevent"}],"output":{"name":"bool"}}],[11,"fmt","","",14,{"inputs":[{"name":"xmlevent"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"as_writer_event","","",14,{"inputs":[{"name":"xmlevent"}],"output":{"name":"option"}}],[11,"new","xml::reader","Creates a new parser, consuming given stream.",15,{"inputs":[{"name":"eventreader"},{"name":"b"}],"output":{"name":"eventreader"}}],[11,"with_config","","Creates a new parser with the provded configuration, consuming given `Buffer`.",15,{"inputs":[{"name":"eventreader"},{"name":"b"},{"name":"parserconfig"}],"output":{"name":"eventreader"}}],[11,"next","","Pulls and returns next XML event from the stream.",15,{"inputs":[{"name":"eventreader"}],"output":{"name":"xmlevent"}}],[11,"events","","Returns an iterator over XML events.",15,{"inputs":[{"name":"eventreader"}],"output":{"name":"events"}}],[11,"position","","Returns the position of the last event produced by the parser",15,{"inputs":[{"name":"eventreader"}],"output":{"name":"textposition"}}],[11,"next","","",16,{"inputs":[{"name":"events"}],"output":{"name":"option"}}],[11,"from_str","","Convenience method to create a reader from a string slice.",15,{"inputs":[{"name":"eventreader"},{"name":"str"}],"output":{"name":"eventreader"}}],[0,"writer","xml","",null,null],[3,"EventWriter","xml::writer","",null,null],[0,"config","","Contains emitter configuration structure.",null,null],[3,"EmitterConfig","xml::writer::config","Emitter configuration structure.",null,null],[12,"line_separator","","Line separator used to separate lines in formatted output. Default is `\"\\n\"`.",17,null],[12,"indent_string","","A string which will be used for a single level of indentation. Default is `\"  \"`\n(two spaces).",17,null],[12,"perform_indent","","Whether or not the emitted document should be indented. Default is false.",17,null],[12,"write_document_declaration","","Whether or not to write XML document declaration at the beginning of a document.\nDefault is true.",17,null],[12,"normalize_empty_elements","","Whether or not to convert elements with empty content to empty elements. Default is true.",17,null],[12,"cdata_to_characters","","Whether or not to emit CDATA events as plain characters. Default is false.",17,null],[11,"new","","Creates an emitter configuration with default values.",17,{"inputs":[{"name":"emitterconfig"}],"output":{"name":"emitterconfig"}}],[11,"line_separator","","Sets the field to the provided value and returns updated config object.",17,{"inputs":[{"name":"emitterconfig"},{"name":"string"}],"output":{"name":"emitterconfig"}}],[11,"indent_string","","Sets the field to the provided value and returns updated config object.",17,{"inputs":[{"name":"emitterconfig"},{"name":"string"}],"output":{"name":"emitterconfig"}}],[11,"perform_indent","","Sets the field to the provided value and returns updated config object.",17,{"inputs":[{"name":"emitterconfig"},{"name":"bool"}],"output":{"name":"emitterconfig"}}],[11,"write_document_declaration","","Sets the field to the provided value and returns updated config object.",17,{"inputs":[{"name":"emitterconfig"},{"name":"bool"}],"output":{"name":"emitterconfig"}}],[11,"normalize_empty_elements","","Sets the field to the provided value and returns updated config object.",17,{"inputs":[{"name":"emitterconfig"},{"name":"bool"}],"output":{"name":"emitterconfig"}}],[11,"cdata_to_characters","","Sets the field to the provided value and returns updated config object.",17,{"inputs":[{"name":"emitterconfig"},{"name":"bool"}],"output":{"name":"emitterconfig"}}],[0,"events","xml::writer","",null,null],[4,"XmlEvent","xml::writer::events","An element of an XML output stream.",null,null],[13,"StartDocument","","Corresponds to XML document declaration.",18,null],[12,"version","xml::writer::events::XmlEvent","XML version.",18,null],[12,"encoding","","XML document encoding.",18,null],[12,"standalone","","XML standalone declaration.",18,null],[13,"ProcessingInstruction","xml::writer::events","Denotes an XML processing instruction.",18,null],[12,"name","xml::writer::events::XmlEvent","Processing instruction target.",18,null],[12,"data","","Processing instruction content.",18,null],[13,"StartElement","xml::writer::events","Denotes a beginning of an XML element.",18,null],[12,"name","xml::writer::events::XmlEvent","Qualified name of the element.",18,null],[12,"attributes","","A list of attributes associated with the element.",18,null],[12,"namespace","","Contents of the namespace mapping at this point of the document.",18,null],[13,"EndElement","xml::writer::events","Denotes an end of an XML document.",18,null],[12,"name","xml::writer::events::XmlEvent","Qualified name of the element.",18,null],[13,"CData","xml::writer::events","Denotes CDATA content.",18,null],[13,"Comment","","Denotes a comment.",18,null],[13,"Characters","","Denotes character data outside of tags.",18,null],[6,"EventWriterResult","xml::writer","",null,null],[11,"new","","",19,{"inputs":[{"name":"eventwriter"},{"name":"w"}],"output":{"name":"eventwriter"}}],[11,"new_with_config","","",19,{"inputs":[{"name":"eventwriter"},{"name":"w"},{"name":"emitterconfig"}],"output":{"name":"eventwriter"}}],[11,"write","","",19,{"inputs":[{"name":"eventwriter"},{"name":"xmlevent"}],"output":{"name":"eventwriterresult"}}],[11,"new_into_mem","","",19,{"inputs":[{"name":"eventwriter"},{"name":"vec"}],"output":{"name":"eventwriter"}}],[11,"new_into_mem_config","","",19,{"inputs":[{"name":"eventwriter"},{"name":"vec"},{"name":"emitterconfig"}],"output":{"name":"eventwriter"}}],[0,"util","xml","",null,null],[3,"ClonedPairwise","xml::util","",null,null],[8,"OptionBorrowExt","","",null,null],[10,"borrow_internals","","",20,{"inputs":[{"name":"optionborrowext"}],"output":{"name":"option"}}],[8,"IteratorClonedPairwiseExt","","",null,null],[10,"cloned_pairwise","","",21,{"inputs":[{"name":"iteratorclonedpairwiseext"}],"output":{"name":"clonedpairwise"}}],[11,"borrow_internals","core::option","",22,{"inputs":[{"name":"option"}],"output":{"name":"option"}}],[11,"next","xml::util","",23,{"inputs":[{"name":"clonedpairwise"}],"output":{"name":"option"}}]],"paths":[[3,"Name"],[3,"OwnedName"],[3,"Attribute"],[3,"OwnedAttribute"],[3,"TextPosition"],[4,"XmlVersion"],[8,"Position"],[3,"Error"],[8,"NamespaceIterable"],[3,"Namespace"],[3,"NamespaceMappings"],[3,"NamespaceStack"],[3,"NamespaceStackMappings"],[3,"ParserConfig"],[4,"XmlEvent"],[3,"EventReader"],[3,"Events"],[3,"EmitterConfig"],[4,"XmlEvent"],[3,"EventWriter"],[8,"OptionBorrowExt"],[8,"IteratorClonedPairwiseExt"],[4,"Option"],[3,"ClonedPairwise"]]};
searchIndex['bitflags'] = {"items":[[0,"","bitflags","A typesafe bitmask flag generator.",null,null],[14,"bitflags!","","The `bitflags!` macro generates a `struct` that holds a set of C-style\nbitmask flags. It is useful for creating typesafe wrappers for C APIs.",null,null]],"paths":[]};
initSearch(searchIndex);