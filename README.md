# Translator

A web app for [Firefox OS](https://developer.mozilla.org/en-US/docs/Mozilla/Firefox_OS)
that lets you translate words or phrases from English to other languages (and the
reverse).

## Run it

Install the [manifest](http://kumar303.github.com/translator/manifest.webapp)
or [launch it](http://kumar303.github.com/translator/)
from Github Pages.

## Hack on it

To simulate serving static content from Github pages to Firefo OS
you can run a simple NodeJS server:

    git clone https://github.com/kumar303/translator.git
    cd translator

You need to link to [gaia](https://github.com/mozilla-b2g/gaia/)
to get the shared styles for local development.
Either set a path to `$GAIA` in your environment or fetch the submodule:

    git submodule update --init

The submodule is pinned to the
[v1-train](https://github.com/mozilla-b2g/gaia/tree/v1-train)
branch to mimic production phones.
Now you are ready to install the Node dependencies and start a development
server:

    npm install
    npm start

Install the [manifest](http://0.0.0.0:3000/translator/manifest.webapp)
or [launch it](http://0.0.0.0:3000/translator/) from your local web server.

## Deploy to Github Pages

To deploy the code to Github Pages run this:

    volo build && volo ghdeploy
