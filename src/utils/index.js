const {Linking} = require('react-native');

export const openExternalLink = url => {
  return Linking.openURL(url)
    .then(() => {
      console.log('Link opened successfully');
    })
    .catch(err => {
      console.error('Error opening external link:', err);
      throw err; // Rethrow the error for the calling code to handle
    });
};

export const formatWifiData = wifiData => {
  const dataParts = wifiData.split(';').filter(part => part.trim() !== '');
  const formattedData = dataParts.map(part => {
    const [key, value] = part.split(':');
    return `${key}: ${value}`;
  });
  return formattedData.join('\n');
};

const barcodeRanges = {
  '000-019': 'US',
  '020-029':
    'Restricted circulation numbers within a geographic region (MO defined)',
  '030-039': 'US',
  '040-049': 'Restricted circulation numbers within a company',
  '050-059': 'US reserved for future use',
  '060-139': 'US',
  '200-299':
    'Restricted circulation numbers within a geographic region (MO defined)',
  '300-379': 'France',
  '380-380': 'Bulgaria',
  '383-383': 'Slovenija',
  '385-385': 'Croatia',
  '387-387': 'BIH (Bosnia-Herzegovina)',
  '389-389': 'Montenegro',
  '400-440': 'Germany',
  '450-459': 'Japan',
  '460-469': 'Russia',
  '470-470': 'Kyrgyzstan',
  '471-471': 'Taiwan',
  '474-474': 'Estonia',
  '475-475': 'Latvia',
  '476-476': 'Azerbaijan',
  '477-477': 'Lithuania',
  '478-478': 'Uzbekistan',
  '479-479': 'Sri Lanka',
  '480-480': 'Philippines',
  '481-481': 'Belarus',
  '482-482': 'Ukraine',
  '483-483': 'Turkmenistan',
  '484-484': 'Moldova',
  '485-485': 'Armenia',
  '486-486': 'Georgia',
  '487-487': 'Kazakstan',
  '488-488': 'Tajikistan',
  '489-489': 'Hong Kong',
  '500-509': 'UK',
  '520-521': 'Association Greece',
  '528-528': 'Lebanon',
  '529-529': 'Cyprus',
  '530-530': 'Albania',
  '531-531': 'Macedonia',
  '535-535': 'Malta',
  '539-539': 'Ireland',
  '540-549': 'Belgium & Luxembourg',
  '560-560': 'Portugal',
  '569-569': 'Iceland',
  '570-579': 'Denmark',
  '590-590': 'Poland',
  '594-594': 'Romania',
  '599-599': 'Hungary',
  '600-601': 'South Africa',
  '603-603': 'Ghana',
  '604-604': 'Senegal',
  '608-608': 'Bahrain',
  '609-609': 'Mauritius',
  '611-611': 'Morocco',
  '613-613': 'Algeria',
  '615-615': 'Nigeria',
  '616-616': 'Kenya',
  '618-618': 'Ivory Coast',
  '619-619': 'Tunisia',
  '620-620': 'Tanzania',
  '621-621': 'Syria',
  '622-622': 'Egypt',
  '623-623': 'Brunei',
  '624-624': 'Libya',
  '625-625': 'Jordan',
  '626-626': 'Iran',
  '627-627': 'Kuwait',
  '628-628': 'Saudi Arabia',
  '629-629': 'Emirates',
  '640-649': 'Finland',
  '690-699': 'China',
  '700-709': 'Norway',
  '729-729': 'Israel',
  '730-739': 'Sweden',
  '740-740': 'Guatemala',
  '741-741': 'El Salvador',
  '742-742': 'Honduras',
  '743-743': 'Nicaragua',
  '744-744': 'Costa Rica',
  '745-745': 'Panama',
  '746-746': 'Republica Dominicana',
  '750-750': 'Mexico',
  '754-755': 'Canada',
  '759-759': 'Venezuela',
  '760-769': 'Schweiz, Suisse, Svizzera',
  '770-771': 'Colombia',
  '773-773': 'Uruguay',
  '775-775': 'Peru',
  '777-777': 'Bolivia',
  '778-779': 'Argentina',
  '780-780': 'Chile',
  '784-784': 'Paraguay',
  '786-786': 'Ecuador',
  '789-790': 'Brasil',
  '800-839': 'Italy',
  '840-849': 'Spain',
  '850-850': 'Cuba',
  '858-858': 'Slovakia',
  '859-859': 'Czech',
  '860-860': 'Serbia',
  '865-865': 'Mongolia',
  '867-867': 'North Korea',
  '868-869': 'Turkey',
  '870-879': 'Netherlands',
  '880-880': 'South Korea',
  '884-884': 'Cambodia',
  '885-885': 'Thailand',
  '888-888': 'Singapore',
  '890-890': 'India',
  '893-893': 'Vietnam',
  '896-896': 'Pakistan',
  '899-899': 'Indonesia',
  '900-919': 'Austria',
  '930-939': 'Australia',
  '940-949': 'New Zealand',
  '950-950': 'Global Office',
  '951-951': 'Global Office (EPCglobal)',
  '955-955': 'Malaysia',
  '958-958': 'Macau',
  '960-969': 'Global Office (GTIN-8s)',
  '977-977': 'Serial publications (ISSN)',
  '978-979': 'Bookland (ISBN)',
  '980-980': 'Refund receipts',
  '981-984': 'coupon identification for common currency areas',
};

export const getCountryFromBarcode = barcode => {
  let number = barcode.substring(0, 3);
  for (const range in barcodeRanges) {
    const [start, end] = range.split('-').map(Number);
    if (number >= start && number <= end) {
      return barcodeRanges[range];
    }
  }
  return 'Value not found for the given number';
};
