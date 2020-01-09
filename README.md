# Sketch Select Parent Artboards Plugin (2020)

2020 version of https://github.com/nefaurk/select-parent-artboards

- Selects the parent artboards of the current selection when you press **⌃⌘A**.
- Supports Sketch >=53.0 ([Released 05 February, 2019](https://developer.sketch.com/plugins/updates/new-in-sketch-53))
- Developed based on [SketchAPI/examples/hello-world](https://github.com/sketch-hq/SketchAPI/tree/develop/examples/hello-world)

_It was created using `skpm`. For a detailed explanation on how things work, checkout the [skpm Readme](https://github.com/skpm/skpm/blob/master/README.md)._

## Installation

Download and double-click `Select Parent Artboards.sketchplugin`.

## Development

Install the dependencies

```bash
npm install
```

Once the installation is done, you can run some commands inside the project folder:

```bash
npm run build
```

To watch for changes:

```bash
npm run watch
```

Additionally, if you wish to run the plugin every time it is built:

```bash
npm run start
```

## Debugging

To view the output of your `console.log`, you have a few different options:

- Use the [`sketch-dev-tools`](https://github.com/skpm/sketch-dev-tools)
- Open `Console.app` and look for the sketch logs
- Look at the `~/Library/Logs/com.bohemiancoding.sketch3/Plugin Output.log` file

Skpm provides a convenient way to do the latter:

```bash
skpm log
```

The `-f` option causes `skpm log` to not stop when the end of logs is reached, but rather to wait for additional data to be appended to the input