const path = require("path")
const fs = require("fs")

const svgSrc = path.join(__dirname, `/../src/svg/`)
let existsIcons = []
fs.readdirSync(svgSrc).forEach(icon => {
    icon = icon
        .split(".")
        .slice(0, -1)
        .join(".")
    existsIcons.push(icon)
})
const aFileIcons = [
    "file_type_actionscript",
    "file_type_ai",
    "file_type_angular",
    "file_type_apache",
    "file_type_audio",
    "file_type_access",
    "file_type_ae",
    "file_type_applescript",
    "file_type_archive",
    "file_type_babel",
    "file_type_binary",
    "file_type_blade",
    "file_type_bower",
    "file_type_c",
    "file_type_c#",
    "file_type_c++",
    "file_type_cf",
    "file_type_circleci",
    "file_type_clojure",
    "file_type_cmake",
    "file_type_coffeescript",
    "file_type_composer",
    "file_type_cpp",
    "file_type_csharp",
    "file_type_css",
    "file_type_csv",
    "file_type_cython",
    "file_type_dart",
    "file_type_default",
    "file_type_delphi",
    "file_type_diff",
    "file_type_dlang",
    "file_type_docker",
    "file_type_dotnet",
    "file_type_editorconfig",
    "file_type_elm",
    "file_type_erlang",
    "file_type_eslint",
    "file_type_ex",
    "file_type_excel",
    "file_type_font",
    "file_type_git",
    "file_type_go",
    "file_type_gradle",
    "file_type_graphviz",
    "file_type_groovy",
    "file_type_gruntfile",
    "file_type_gulpfile",
    "file_type_haml",
    "file_type_haskell",
    "file_type_haxe",
    "file_type_html",
    "file_type_image",
    "file_type_indesign",
    "file_type_java",
    "file_type_js",
    "file_type_json",
    "file_type_jsp",
    "file_type_jsx",
    "file_type_julia",
    "file_type_kotlin",
    "file_type_less",
    "file_type_license",
    "file_type_liquid",
    "file_type_lisp",
    "file_type_lock",
    "file_type_log",
    "file_type_lsl",
    "file_type_lua",
    "file_type_markdown",
    "file_type_markup",
    "file_type_matlab",
    "file_type_maya",
    "file_type_mustache",
    "file_type_nginx",
    "file_type_nodejs",
    "file_type_note",
    "file_type_npm",
    "file_type_nsis",
    "file_type_ocaml",
    "file_type_onenote",
    "file_type_pdf",
    "file_type_perl",
    "file_type_php",
    "file_type_plist",
    "file_type_postcss",
    "file_type_powerpoint",
    "file_type_powershell",
    "file_type_preferences",
    "file_type_premiere",
    "file_type_procfile",
    "file_type_psd",
    "file_type_pug",
    "file_type_puppet",
    "file_type_python",
    "file_type_r",
    "file_type_rails",
    "file_type_registry",
    "file_type_restructuredtext",
    "file_type_riot",
    "file_type_ruby",
    "file_type_rust",
    "file_type_sass",
    "file_type_scala",
    "file_type_scss",
    "file_type_settings",
    "file_type_shell",
    "file_type_sketch",
    "file_type_slim",
    "file_type_source",
    "file_type_sql",
    "file_type_stata",
    "file_type_stylelint",
    "file_type_stylus",
    "file_type_sublime",
    "file_type_svelte",
    "file_type_svg",
    "file_type_swift",
    "file_type_tcl",
    "file_type_tern",
    "file_type_terraform",
    "file_type_tex",
    "file_type_text",
    "file_type_textile",
    "file_type_todo",
    "file_type_twig",
    "file_type_typescript",
    "file_type_unity3d",
    "file_type_vhdl",
    "file_type_video",
    "file_type_vim",
    "file_type_visualstudio",
    "file_type_vue",
    "file_type_webpack",
    "file_type_windows",
    "file_type_word",
    "file_type_yaml",
    "file_type_yarn"
]

existsIcons.forEach(value => {
    if (!aFileIcons.includes(value))  console.log(value)
})

console.log('MISSED ICONS')
aFileIcons.forEach(value => {
    if (!existsIcons.includes(value))  console.log(value)
})

