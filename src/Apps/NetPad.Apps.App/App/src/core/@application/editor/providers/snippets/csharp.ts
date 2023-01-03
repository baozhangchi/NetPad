// Taken, and modified, from:
// https://github.com/OmniSharp/omnisharp-vscode/blob/master/snippets/csharp.json
// Copyright (c) .NET Foundation and Contributors

export const snippets = {
    "Attribute using recommended pattern": {
        prefix: "attribute",
        body: [
            "[System.AttributeUsage(System.AttributeTargets.${1:All}, Inherited = ${2:false}, AllowMultiple = ${3:true})]",
            "sealed class ${4:My}Attribute : System.Attribute",
            "{",
            "\t// See the attribute guidelines at",
            "\t// http://go.microsoft.com/fwlink/?LinkId=85236",
            "\treadonly string positionalString;",
            "\t",
            "\t// This is a positional argument",
            "\tpublic ${4:My}Attribute(string positionalString)",
            "\t{",
            "\t\tthis.positionalString = positionalString;",
            "\t\t",
            "\t\t// TODO: Implement code here",
            "\t\t${5:throw new System.NotImplementedException();}",
            "\t}",
            "\t",
            "\tpublic string PositionalString",
            "\t{",
            "\t\tget { return positionalString; }",
            "\t}",
            "\t",
            "\t// This is a named argument",
            "\tpublic int NamedInt { get; set; }",
            "}"
        ],
        description: "Attribute using recommended pattern"
    },
    "Disable format": {
        prefix: "disableformat",
        body: [
            "#pragma warning disable format",
            "$0${TM_SELECTED_TEXT}",
            "#pragma warning restore format"
        ],
        description: "disable format of dotnet code"
    },
    "Checked block": {
        prefix: "checked",
        body: [
            "checked",
            "{",
            "\t${TM_SELECTED_TEXT}$0",
            "}"
        ],
        description: "Checked block"
    },
    Class: {
        prefix: "class",
        body: [
            "class ${1:MyClass}",
            "{",
            "\t$0",
            "}"
        ],
        description: "Class"
    },
    "Class with constructor": {
        prefix: "classwctor",
        body: [
            "class ${1:MyClass}",
            "{",
            "\t${2:public} ${1:MyClass}(${3:Parameters})",
            "\t{",
            "\t\t$0",
            "\t}",
            "}"
        ],
        description: "Class with a constructor"
    },
    "Console.WriteLine": {
        prefix: "cw",
        body: [
            "System.Console.WriteLine(${TM_SELECTED_TEXT}$0);"
        ],
        description: "Console.WriteLine"
    },
    "do...while loop": {
        prefix: "do",
        body: [
            "do",
            "{",
            "\t${TM_SELECTED_TEXT}$0",
            "} while (${1:true});"
        ],
        description: "do...while loop"
    },
    "Else statement": {
        prefix: "else",
        body: [
            "else",
            "{",
            "\t${TM_SELECTED_TEXT}$0",
            "}"
        ],
        description: "Else statement"
    },
    Enum: {
        prefix: "enum",
        body: [
            "enum ${1:MyEnum}",
            "{",
            "\t$0",
            "}"
        ],
        description: "Enum"
    },
    "Implementing Equals() according to guidelines": {
        prefix: "equals",
        body: [
            "// override object.Equals",
            "public override bool Equals(object obj)",
            "{",
            "\t//",
            "\t// See the full list of guidelines at",
            "\t//   http://go.microsoft.com/fwlink/?LinkID=85237",
            "\t// and also the guidance for operator== at",
            "\t//   http://go.microsoft.com/fwlink/?LinkId=85238",
            "\t//",
            "\t",
            "\tif (obj == null || GetType() != obj.GetType())",
            "\t{",
            "\t\treturn false;",
            "\t}",
            "\t",
            "\t// TODO: write your implementation of Equals() here",
            "\t${1:throw new System.NotImplementedException();}",
            "\treturn base.Equals (obj);",
            "}",
            "",
            "// override object.GetHashCode",
            "public override int GetHashCode()",
            "{",
            "\t// TODO: write your implementation of GetHashCode() here",
            "\t${2:throw new System.NotImplementedException();}",
            "\treturn base.GetHashCode();",
            "}"
        ],
        description: "Implementing Equals() according to guidelines"
    },
    Exception: {
        prefix: "exception",
        body: [
            "[System.Serializable]",
            "public class ${1:My}Exception : ${2:System.Exception}",
            "{",
            "\tpublic ${1:My}Exception() { }",
            "\tpublic ${1:My}Exception(string message) : base(message) { }",
            "\tpublic ${1:My}Exception(string message, System.Exception inner) : base(message, inner) { }",
            "\tprotected ${1:My}Exception(",
            "\t\tSystem.Runtime.Serialization.SerializationInfo info,",
            "\t\tSystem.Runtime.Serialization.StreamingContext context) : base(info, context) { }",
            "}"
        ],
        description: "Exception"
    },
    "Foreach statement": {
        prefix: "foreach",
        body: [
            "foreach (${1:var} ${2:item} in ${3:collection})",
            "{",
            "\t${TM_SELECTED_TEXT}$0",
            "}"
        ],
        description: "Foreach statement"
    },
    "Reverse for loop": {
        prefix: "forr",
        body: [
            "for (int ${1:i} = ${2:length} - 1; ${1:i} >= 0 ; ${1:i}--)",
            "{",
            "\t${TM_SELECTED_TEXT}$0",
            "}"
        ],
        description: "Reverse for loop"
    },
    "for loop": {
        prefix: "for",
        body: [
            "for (int ${1:i} = 0; ${1:i} < ${2:length}; ${1:i}++)",
            "{",
            "\t${TM_SELECTED_TEXT}$0",
            "}"
        ],
        description: "for loop"
    },
    "if statement": {
        prefix: "if",
        body: [
            "if (${1:true})",
            "{",
            "\t${TM_SELECTED_TEXT}$0",
            "}"
        ],
        description: "if statement"
    },
    Indexer: {
        prefix: "indexer",
        body: [
            "${1:public} ${2:object} this[${3:int} index]",
            "{",
            "\tget { $4 }",
            "\tset { $0 }",
            "}"
        ],
        description: "Indexer"
    },
    Interface: {
        prefix: "interface",
        body: [
            "interface ${1:MyInterface}",
            "{",
            "\t$0",
            "}"
        ],
        description: "Interface"
    },
    "Safely invoking an event": {
        prefix: "invoke",
        body: [
            "${1:EventHandler} temp = ${2:MyEvent};",
            "if (temp != null)",
            "{",
            "\ttemp($0);",
            "}"
        ],
        description: "Safely invoking an event"
    },
    "Simple iterator": {
        prefix: "iterator",
        body: [
            "public System.Collections.Generic.IEnumerator<${1:ElementType}> GetEnumerator()",
            "{",
            "\t$0throw new System.NotImplementedException();",
            "\tyield return default(${1:ElementType});",
            "}"
        ],
        description: "Simple iterator"
    },
    "Named iterator/indexer pair using a nested class": {
        prefix: "iterindex",
        body: [
            "public ${1:Name}Iterator ${1:Name}",
            "{",
            "\tget",
            "\t{",
            "\t\treturn new ${1:Name}Iterator(this);",
            "\t}",
            "}",
            "",
            "public class ${1:Name}Iterator",
            "{",
            "\treadonly ${2:ClassName} outer;",
            "\t",
            "\tinternal ${1:Name}Iterator(${2:ClassName} outer)",
            "\t{",
            "\t\tthis.outer = outer;",
            "\t}",
            "\t",
            "\t// TODO: provide an appropriate implementation here",
            "\tpublic int Length { get { return 1; } }",
            "\t",
            "\tpublic ${3:ElementType} this[int index]",
            "\t{",
            "\t\tget",
            "\t\t{",
            "\t\t\t//",
            "\t\t\t// TODO: implement indexer here",
            "\t\t\t//",
            "\t\t\t// you have full access to ${2:ClassName} privates",
            "\t\t\t//",
            "\t\t\t${4:throw new System.NotImplementedException();}",
            "\t\t\treturn default(${3:ElementType});",
            "\t\t}",
            "\t}",
            "\t",
            "\tpublic System.Collections.Generic.IEnumerator<${3:ElementType}> GetEnumerator()",
            "\t{",
            "\t\tfor (int i = 0; i < this.Length; i++)",
            "\t\t{",
            "\t\t\tyield return this[i];",
            "\t\t}",
            "\t}",
            "}"
        ],
        description: "Named iterator/indexer pair using a nested class"
    },
    "Lock statement": {
        prefix: "lock",
        body: [
            "lock (${1:this})",
            "{",
            "\t${TM_SELECTED_TEXT}$0",
            "}"
        ],
        description: "Lock statement"
    },
    "MessageBox.Show": {
        prefix: "mbox",
        body: [
            "System.Windows.Forms.MessageBox.Show(\"${1:Text}\");$0"
        ],
        description: "MessageBox.Show"
    },
    Namespace: {
        prefix: "namespace",
        body: [
            "namespace ${1:Name}",
            "{",
            "\t$0",
            "}"
        ],
        description: "Namespace"
    },
    FileScopedNamespace: {
        prefix: "fsnamespace",
        body: [
            "namespace ${1:Name};"
        ],
        description: "File-scoped namespace"
    },
    "#if": {
        prefix: "ifd",
        body: [
            "#if ${1:true}",
            "\t${TM_SELECTED_TEXT}$0",
            "#endif"
        ],
        description: "#if"
    },
    "#region": {
        prefix: "region",
        body: [
            "#region ${1:Name}",
            "\t${TM_SELECTED_TEXT}$0",
            "#endregion"
        ],
        description: "#region"
    },
    "Property and backing field": {
        prefix: "propfull",
        body: [
            "private ${1:int} ${2:myVar};",
            "public ${1:int} ${3:MyProperty}",
            "{",
            "\tget { return ${2:myVar}; }",
            "\tset { ${2:myVar} = value; }",
            "}",
            "$0"
        ],
        description: "Property and backing field"
    },
    propg: {
        prefix: "propg",
        body: [
            "public ${1:int} ${2:MyProperty} { get; private set; }$0"
        ],
        description: "An automatically implemented property with a 'get' accessor and a private 'set' accessor. C# 3.0 or higher"
    },
    prop: {
        prefix: "prop",
        body: [
            "public ${1:int} ${2:MyProperty} { get; set; }$0"
        ],
        description: "An automatically implemented property. C# 3.0 or higher"
    },
    sim: {
        prefix: "sim",
        body: [
            "static int Main(string[] args)",
            "{",
            "\t$0",
            "\treturn 0;",
            "}"
        ],
        description: "int Main()"
    },
    Struct: {
        prefix: "struct",
        body: [
            "struct ${1:MyStruct}",
            "{",
            "\t$0",
            "}"
        ],
        description: "Struct"
    },
    svm: {
        prefix: "svm",
        body: [
            "static void Main(string[] args)",
            "{",
            "\t$0",
            "}"
        ],
        description: "void Main()"
    },
    "Switch statement": {
        prefix: "switch",
        body: [
            "switch (${1:switch_on})",
            "{",
            "\t$0",
            "\tdefault:",
            "}"
        ],
        description: "Switch statement"
    },
    "Try finally": {
        prefix: "tryf",
        body: [
            "try",
            "{",
            "\t${TM_SELECTED_TEXT}$1",
            "}",
            "finally",
            "{",
            "\t$0",
            "}"
        ],
        description: "Try finally"
    },
    "Try catch": {
        prefix: "try",
        body: [
            "try",
            "{",
            "\t${TM_SELECTED_TEXT}$1",
            "}",
            "catch (${2:System.Exception})",
            "{",
            "\t$0",
            "\tthrow;",
            "}"
        ],
        description: "Try catch"
    },
    "Unchecked block": {
        prefix: "unchecked",
        body: [
            "unchecked",
            "{",
            "\t${TM_SELECTED_TEXT}$0",
            "}"
        ],
        description: "Unchecked block"
    },
    "Unsafe statement": {
        prefix: "unsafe",
        body: [
            "unsafe",
            "{",
            "\t${TM_SELECTED_TEXT}$0",
            "}"
        ],
        description: "Unsafe statement"
    },
    "Using statement": {
        prefix: "using",
        body: [
            "using (${1:resource})",
            "{",
            "\t${TM_SELECTED_TEXT}$0",
            "}"
        ],
        description: "Using statement"
    },
    "While loop": {
        prefix: "while",
        body: [
            "while (${1:true})",
            "{",
            "\t${TM_SELECTED_TEXT}$0",
            "}"
        ],
        description: "While loop"
    },
    constructor: {
        prefix: "ctor",
        body: [
            "${1:public} ${2:MyClass}(${3:Parameters})",
            "{",
            "\t$0",
            "}"
        ],
        description: "constructor"
    },
    "xUnit Test": {
        prefix: "fact",
        body: [
            "[Fact]",
            "public void ${1:TestName}()",
            "{",
            "\t// Given",
            "",
            "\t// When",
            "",
            "\t// Then",
            "}$0"
        ],
        description: "create xunit test method"
    }
}
