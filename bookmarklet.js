/**
 * SpaceX Acronym Expander for Reddit v 0.0.1
 * @author Travis Swientek (@travelton)
 * @license http://unlicense.org/UNLICENSE
 */
javascript: (function () {
    var jsCode = document.createElement('script');
    jsCode.setAttribute('src', 'https://cfe4d88a6baa9073be60-66fd6525050c6d374718c816da1eee77.ssl.cf2.rackcdn.com/findAndReplaceDOMText.js');
    jsCode.onload=doIt;
    document.body.appendChild(jsCode);

    function doIt(){
      var explanations = {
        'AOS':	'Acquisition of Signal',
        'ACS':	'Attitude Control System',
        'ACES':	'Advanced Cryogenic Evolved Stage',
        'ARM':	'Asteroid Redirect Mission',
        'ASDS':	'Autonomous Spaceport Drone Ship',
        'BEAM':	'Bigelow Expandable Activities Module',
        'BFR':	'Big Falcon Rocket',
        'BO':	'Blue Origin',
        'CBM':	'Common Berthing Mechanism',
        'CCAFS':	'Cape Canaveral Air Force Station',
        'COPV':	'Composite Overwrapped Pressure Vessel',
        'COTS':	'Commercial Orbital Transportation Services',
        'CRS':	'Commercial Resupply Services',
        'EAR':	'Export Administration Regulations',
        'EDL':	'Entry, Descent and Landing',
        'FRR':	'Flight Readiness Review',
        'FSS':	'Fixed Service Structure',
        'FH':	'Falcon Heavy',
        'FRR':	'Flight Readiness Review',
        'FT':	'Full Thrust',
        'GSE':	'Ground Support Equipment',
        'HIF':	'Horizontal Integration Facility',
        'IIP':	'Instantaneous Impact Point',
        'IMMT':	'ISS Mission Management Team',
        'ISRU':	'In-situ Resource Utilization',
        'ISP':	'Specific Impulse',
        'ISS':	'International Space Station',
        'ITAR':	'International Traffic in Arms Regulations',
        'JRTI':	'Just Read The Instructions (Marmac 300)',
        'JWST':	'James Webb Space Telescope',
        'KSC':	'Kennedy Space Center',
        'LAS':	'Launch Abort System',
        'LES':	'Launch Escape System',
        'LOM':	'Loss of Mission',
        'LOS':	'Loss of Signal',
        'LOV':	'Loss of Vehicle',
        'LRR':	'Launch Readiness Review',
        'MA':	'Mission Assurance',
        'MCT':	'Mars Colonial Transporter',
        'MECO':	'Main Engine Cutoff',
        'NDA':	'Non-Disclosure Agreement',
        'NDS':	'NASA Docking System',
        'NET':	'No Earlier Than',
        'NEO':	'Near Earth Orbit',
        'NSF':	'NASA Spaceflight/NASA Spaceflight Forum',
        'OCISLY':	'Of Course I Still Love You (Marmac 304)',
        'PIF':	'Payload Integration Facility',
        'PMA':	'Pressurized Mating Adapter',
        'PMF':	'Propellant Mass Fraction',
        'RCS':	'Reaction Control System',
        'RSS':	'Rotating Service Structure',
        'RUD':	'Rapid Unplanned Disassembly',
        'RTLS':	'Return To Launch Site',
        'RTF':  'Return To Flight',
        'SECO':	'Second (Stage) Engine Cutoff',
        'SEP':	'Solar Electric Propulsion',
        'SPIF':	'Spacecraft Processing and Integration Facility',
        'SFN':	'Spaceflight Now',
        'SSME':	'Space Shuttle Main Engine',
        'SSTO':	'Single Stage To Orbit',
        'TRL':	'Technology Readiness Level',
        'ULA':	'United Launch Alliance',
        'VAB':	'Vehicle Assembly Building',
        'VAFB':	'Vandenberg Air Force Base, California',
        'VV':	'Visiting Vehicle',
        'WDR':	'Wet Dress Rehearsal',
        'AVI':	'Avionics Operator',
        'CC':	'Communications Coordinator',
        'CE':	'Chief Engineer',
        'DC':	'Dragon Controller',
        'FRC':	'Falcon Recovery Coordinator',
        'FS':	'Flight Software',
        'FSPO':	'Flight Safety Project Officer',
        'FTS':	'Flight Termination System',
        'GC':	'Ground Control',
        'GNC':	'Guidance, Navigation, & Control',
        'GS':	'Ground Station',
        'LD':	'Launch Director',
        'LDA':	'Launch Decision Authority',
        'MM':	'Mission Manager',
        'OD':	'Orbital Director',
        'OSM':	'Operations Safety Manager',
        'PROP':	'Propulsion',
        'RC':	'Range Coordinator',
        'RCO':	'Range Control Officer',
        'ROC':	'Range Operations Coordinator',
        'SE':	'Systems Engineer',
        'TVC':	'Thrust Vector Control',
        'VC':	'Vehicle Control'
      };

      function replaceWith(portion, match){
        if (portion.text in explanations){
          return '"' + portion.text + '" (' + explanations[portion.text] + ')';
        }else{
          return portion.text;
        }
      }
      findAndReplaceDOMText(document, {
        find: /\b[A-Z]{2,6}\b/g,
        replace: replaceWith
      });
    }
}());
