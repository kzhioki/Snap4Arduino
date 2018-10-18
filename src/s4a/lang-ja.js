
s4aTempDict = {

    /*
       Special characters: (see <http://0xcc.net/jsescape/>)

       Ä, ä   \u00c4, \u00e4
       Ö, ö   \u00d6, \u00f6
       Ü, ü   \u00dc, \u00fc
       ß      \u00df
       */
    // primitive blocks:

    /*
       Attention Translators:
       ----------------------
       At this time your translation of block specs will only work
       correctly, if the order of formal parameters and their types
       are unchanged. Placeholders for inputs (formal parameters) are
       indicated by a preceding % prefix and followed by a type
       abbreviation.

       For example:

       'say %s for %n secs'

       can currently not be changed into

       'say %n secs long %s'

       and still work as intended.

       Similarly

       'point towards %dst'

       cannot be changed into

       'point towards %cst'

       without breaking its functionality.
       */

    // arduino:

    'digital input':
        'デジタル入力',

    'digital output':
        'デジタル出力',

    'PWM':
        'PWM',

    'servo':
        'サーボ',

    'clockwise':
        '右回り',

    'clockwise (1500-1000)':
        '右周り (1500-1000)',

    'counter-clockwise':
        '左回り',

    'counter-clockwise (1500-2000)':
        '左回り (1500-2000)',

    'stopped':
        '停止',

    'stopped (1500)':
        '停止 (1500)',

    'disconnected':
        '切断',

    'angle (0-180)':
        '角度 (0-180)',

    'connect to Arduino':
        'Arduinoに接続する',

    'disconnect Arduino':
        'Arduinoから切断する',

    'Connect Arduino':
        'Arduinoに接続する',

    'Disconnect Arduino':
        'Arduinoから切断する',

    'analog reading %analogPin':
        'アナログピン %analogPin を読む',

    'digital reading %digitalPin':
        'デジタルピン %analogPin を読む',

    'connect arduino at %s':
        '%s でArduinoに接続する',

    'disconnect arduino':
        'Arduinoから切断する',

    'setup digital pin %digitalPin as %pinMode':
        'デジタルピン %digitalPin を %pinMode にする',

    'set digital pin %digitalPin to %b':
        'デジタルピン %digitalPin に %b を書く',

    'set servo %digitalPin to %servoValue':
        'サーボピン %digitalPin を %servoValue にする',

    'set pin %pwmPin to value %n':
        'PWMピン %pwmPin を %n にする',

    'Connecting board at port\n': 
        'ポートで基板と接続されています',

    'An Arduino board has been connected. Happy prototyping!':
        '基板と接続されました。ハッピープロトタイピング！',

    'Board was disconnected from port\n':
        'ポートから基板が切断されました',

    'It seems that someone pulled the cable!':
        'ケーブルが引き抜かれたかもしれません！',

    'Error connecting the board.':
        '基板でエラーが発生しました',

    'There is already a board connected to this sprite':
        'このスプライトはすでに基板に接続されています',

    'Could not connect an Arduino\nNo boards found':
        '基板に接続できません',

    'Could not talk to Arduino in port\n':
        'そのポートで基板と通信できません',

    'Check if firmata is loaded.':
        'Firmataがロードされているかどうかチェックします',

    'An error was detected on the board\n\n':
        '基板でエラーが検出されました',

    'Board is not connected':
        '基板が接続されていません',

    'New Arduino translatable project':
        '新しいArduino翻訳可能なプロジェクトです',

    'select a port':
        'ポートを選択します',

    'Network port':
        'ネットワークポート',

    'Enter hostname or ip address:':
        'hostnameかIPアドレスを入力してください',

    'Connecting to network port:\n':
        'ネットワークポートに接続しました',

    'This may take a few seconds...':
        '数秒かかります',

    'Network serial ports':
        'ネットワークシリアルポート'
};

// Please change the LANG keyword in the lines below by your locale's two-digit code in lowercase,
// like en for English, ca for Catalan, zh for Mandarin or de for German.

// Add attributes to original SnapTranslator.dict.LANG
for (var attrname in s4aTempDict) { SnapTranslator.dict.LANG[attrname] = s4aTempDict[attrname]; }
